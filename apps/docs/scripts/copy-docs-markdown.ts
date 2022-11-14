import * as fs from 'fs-extra';
import glob from 'glob';
import path from 'path';

const outerDocsPath = path.resolve(__dirname, '../../../docs');
const innerDocsPath = path.resolve(__dirname, '../src/routes/docs');
const innerGeneralDocsPath = path.resolve(__dirname, '../src/routes/docs/general');

const docs = glob.sync(`${outerDocsPath}/*.md`);

docs.forEach((markdownPath) => {
  const markdownContent = fs.readFileSync(markdownPath, { encoding: 'utf8' });

  let { name: fileName } = path.parse(markdownPath);
  let filePath = path.resolve(innerGeneralDocsPath, fileName, `index.md`);

  if (fileName === 'README') {
    fileName = 'index';
    filePath = path.resolve(innerDocsPath, `index.md`);
  }

  fs.outputFileSync(filePath, transformMarkdown(markdownContent, fileName));
});

function transformMarkdown(markdownContent: string, fileName: string) {
  let title = fileName;
  let transformedContent = removeTableOfContents(markdownContent);
  if (title === 'index') {
    title = 'Overview';
    transformedContent = fixOverviewLinks(markdownContent);
  }

  return `---
title: ${title}
---

${transformedContent}

`;
}

function fixOverviewLinks(markdownContent: string): string {
  return markdownContent.replace(/\(\.\/(.*)\.md\)/gm, '(/docs/general/$1)');
}

function removeTableOfContents(markdownContent: string): string {
  const lines = markdownContent.split('\n');

  const filteredLines: string[] = [];

  let isTableOfContents = false;
  lines.forEach((line) => {
    const trimmedLine = line.trim();

    if (trimmedLine === '**Table of contents**') {
      console.log('Found table of contents');
      isTableOfContents = true;
    } else if (isTableOfContents) {
      const startingCharacter = trimmedLine.charAt(0);
      if (trimmedLine !== '' && startingCharacter !== '-' && startingCharacter !== '<') {
        console.log('Table of contents ended', { startingCharacter, line, trimmedLine });
        isTableOfContents = false;
      }
    }

    if (!isTableOfContents) {
      filteredLines.push(line);
    }
  });

  return filteredLines.join('\n');
}
