'use strict';
// A shared renderer for every topic. Use textContent for author-supplied text.
const Resources = (() => {
  function element(tag, text, className) {
    const node = document.createElement(tag);
    if (text) node.textContent = text;
    if (className) node.className = className;
    return node;
  }
  function render(topicId, root) {
    root.replaceChildren();
    root.append(element('h5', 'Learning resources'), element('p', 'Download the relevant files and practise the concepts in Power BI Desktop.'));
    const files = Object.hasOwn(RESOURCE_DATA, topicId) ? RESOURCE_DATA[topicId] : [];
    if (!files.length) {
      const empty = element('div', '', 'resource-empty');
      empty.append(element('strong', 'No downloadable files for this lesson yet.'), element('p', 'You can still use the Notes, Visual Lab, Practice and Quiz tabs.'));
      root.append(empty); return;
    }
    const list = element('div', '', 'resource-list');
    for (const file of files) {
      const card = element('article', '', 'resource-card');
      const icon = element('span', file.type, 'resource-type'); icon.setAttribute('aria-hidden', 'true');
      const body = element('div', '', 'resource-body');
      body.append(element('h6', file.title), element('p', file.description), element('div', file.filename, 'resource-filename'), element('small', file.details, 'resource-details'));
      const link = element('a', 'Open / download ↗', 'secondary resource-link');
      const url = new URL(file.url);
      if (url.protocol !== 'https:' || !['drive.google.com','docs.google.com'].includes(url.hostname)) continue;
      link.href = url.href; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.setAttribute('aria-label', 'Open or download '+file.filename+' from Google Drive (new tab)');
      card.append(icon, body, link); list.append(card);
    }
    root.append(list, element('p', 'The file opens in Google Drive in a new tab. Use the Download button there to save a copy. Internet access is required.', 'resource-help'));
  }
  return {render};
})();
