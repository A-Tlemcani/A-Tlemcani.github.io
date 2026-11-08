import { href } from '../i18n';
import { SITE, meta, profile } from '../data/site';
import { projects, projectIds } from '../data/projects';
import { decisions, decisionIds } from '../data/decisions';

/** llms.txt (llmstxt.org): a plain summary of the site for AI search tools. Built from the same data as the pages. */
export function GET() {
  const url = (p: string) => `${SITE}${href('en', p)}`;
  const lines = [
    `# ${profile.name}`,
    '',
    `> ${meta.description.en}`,
    '',
    `French version: ${SITE}${href('fr', '/')}`,
    '',
    '## Pages',
    `- [Skills](${url('/skills/')}): skills with levels 1–5 and the projects that prove them`,
    `- [How I work with AI](${url('/how-i-work/')}): who does what, and the rules for client data`,
    `- [ServiceNow](${url('/servicenow/')}): ServiceNow and AI agent work`,
    `- [Decisions](${url('/decisions/')}): short decision records`,
    `- [Legal notice](${url('/legal/')})`,
    '',
    '## Projects',
    ...projectIds.map((id) => `- [${projects[id].title}](${url(`/projects/${id}/`)}): ${projects[id].client.en}`),
    '',
    '## Decisions',
    ...decisionIds.map((id) => `- [${decisions[id].title.en}](${url(`/decisions/${id}/`)})`),
    '',
  ];
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
