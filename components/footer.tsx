import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Open source AI chatbot built with{' '}
      <ExternalLink href="https://nextjs.org">Next.js/React</ExternalLink> and{' '}
      <ExternalLink href="https://huggingface.co/docs/transformers/main/en/model_doc/flan-t5">
        HuggingFace FLAN-T5 LLM
      </ExternalLink>
      .
    </p>
  )
}
