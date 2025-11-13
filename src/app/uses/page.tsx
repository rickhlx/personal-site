import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description:
    'Software I use, gadgets I love, and other things that make me happy.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things that make me happy."
      intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="13” MacBook Air, M4, 24GB RAM (2025)">
            A lightweight, portable MacBook with extra RAM and the best chip on
            the market. Who cares if it's not a "Pro"?
          </Tool>
          <Tool title="Neo80 Qwertykeys Keyboard w/ Banana Split switches">
            I use this thing all day, every day, might as well have a nice one.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Development tools">
          <Tool title="Neovim">
            Ever since adopting Claude Code as my AI tool of choice, I've
            immersed myself more into the terminal.
          </Tool>
          <Tool title="Ghostty">
            I’m honestly not even sure what features I get with this that aren’t
            just part of the macOS Terminal but it’s what I use.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Productivity">
          <Tool title="Obsidian">
            Best note taking app, now enhanced with LLMs!
          </Tool>
          <Tool title="Claude Code">Best CLI tool for the best LLM.</Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
