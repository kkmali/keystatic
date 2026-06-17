---
layout: ../../layouts/DefaultLayout.astro
title: Home
description: Mainline is bringing modern software to life with AI magic.
draft: false

sections:
  - type: hero
    enable: true
    title: Mainline Astro template kghcf
    description: sdsfsdfsdfv
    button_primary:
      label: Get template
      link: https://github.com/shadcnblocks/mainline-astro-template
    button_secondary:
      label: Built by shadcnblocks.com
      link: https://shadcnblocks.com
    features:
      - title: Tailored workflows
        description: Track progress across custom issue flows for your team.
        icon: lu:CircleDot
      - title: Cross-team projects
        description: Collaborate across teams and departments.
        icon: lu:Blend
      - title: Milestones
        description: Break projects down into concrete phases.
        icon: lu:Diamond
      - title: Progress insights
        description: Track scope, velocity, and progress over time.
        icon: lu:ChartNoAxesColumn
    image: /hero.webp
    badge: ""
  - type: logos
    enable: true
    title: Powering the world's best product teams.
    subtitle: From next-gen startups to established enterprises.
    topRowCompanies:
      - name: Mercury
        logo: /logos/mercury.svg
        width: 143
        height: 26
        href: https://mercury.com
      - name: Watershed
        logo: /logos/watershed.svg
        width: 154
        height: 31
        href: https://watershed.com
      - name: Retool
        logo: /logos/retool.svg
        width: 113
        height: 22
        href: https://retool.com
      - name: Descript
        logo: /logos/descript.svg
        width: 112
        height: 27
        href: https://descript.com
    bottomRowCompanies:
      - name: Perplexity
        logo: /logos/perplexity.svg
        width: 141
        height: 32
        href: https://perplexity.com
      - name: Monzo
        logo: /logos/monzo.svg
        width: 104
        height: 18
        href: https://monzo.com
      - name: Ramp
        logo: /logos/ramp.svg
        width: 105
        height: 28
        href: https://ramp.com
      - name: Raycast
        logo: /logos/raycast.svg
        width: 128
        height: 33
        href: https://raycast.com
      - name: Arc
        logo: /logos/arc.svg
        width: 90
        height: 28
        href: https://arc.com
  - type: features
    enable: true
    badge: MEASURE TWICE. CUT ONCE.
    title: Made for modern product teams
    description: "Mainline is built on the habits that make the best product teams
      successful: staying focused, moving quickly, and always aiming for
      high-quality work."
    items:
      - title: Purpose-built for product development
        image: /features/triage-card.svg
      - title: Manage projects end-to-end
        image: /features/cycle-card.svg
      - title: Build momentum and healthy habits
        image: /features/overview-card.svg
  - type: resource_allocation
    enable: true
    title: Mainline your resource allocation and execution
    topItems:
      - title: Reusable issue templates.
        description: Draft lightning-fast documents with our Smart Instructions and
          Templates.
        images:
          - src: /resource-allocation/templates.webp
            alt: Issue template interface
            width: 495
            height: 186
        className: flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8
          xl:[&>.image-container]:translate-x-6
          [&>.image-container]:translate-x-2
        fade:
          - ""
      - title: Simplify your stack.
        description: No more Confluence, SharePoint, or Microsoft Word.
        images:
          - src: /logos/jira.svg
            alt: Jira logo
            width: 48
            height: 48
          - src: /logos/excel.svg
            alt: Excel logo
            width: 48
            height: 48
          - src: /logos/notion.svg
            alt: Notion logo
            width: 48
            height: 48
          - src: /logos/word.svg
            alt: Word logo
            width: 48
            height: 48
          - src: /logos/monday.svg
            alt: Monday logo
            width: 48
            height: 48
          - src: /logos/drive.svg
            alt: Google Drive logo
            width: 48
            height: 48
          - src: /logos/jira.svg
            alt: Jira logo
            width: 48
            height: 48
          - src: /logos/asana.svg
            alt: Asana logo
            width: 48
            height: 48
        className: flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8
          md:[&>.title-container]:translate-x-2
          xl:[&>.title-container]:translate-x-4
          [&>.title-container]:translate-x-0
        fade: []
    bottomItems:
      - title: Graveyard it.
        description: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do.
        images:
          - src: /resource-allocation/graveyard.webp
            alt: Graveyard interface
            width: 305
            height: 280
        className: "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8
          xl:[&>.image-container]:translate-x-6
          [&>.image-container]:translate-x-2"
        fade:
          - bottom
      - title: Task discussions.
        description: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
        images:
          - src: /resource-allocation/discussions.webp
            alt: Task discussions interface
            width: 320
            height: 103
        className: justify-normal [&>.title-container]:mb-5 md:[&>.title-container]:mb-0
          [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center
          md:[&>.image-container]:-translate-y-3
        fade:
          - ""
      - title: Notifications.
        description: Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.
        images:
          - src: /resource-allocation/notifications.webp
            alt: Notifications interface
            width: 305
            height: 280
        className: "[&>.title-container]:mb-5 md:[&>.title-container]:mb-8
          xl:[&>.image-container]:translate-x-6
          [&>.image-container]:translate-x-2"
        fade:
          - bottom
  - type: testimonials
    enable: true
    title: Trusted by product builders
    description: "Mainline is built on the habits that make the best product teams
      successful: staying focused, moving quickly, and always aiming for
      high-quality work."
    button_primary:
      label: Read our Customer Stories
      link: "#"
    items:
      - quote: We're misusing Mainline as a CRM and it still works!
        author: Amy Chase
        role: PM
        company: Mercury Finance
        image: /testimonials/amy-chase.webp
      - quote: I was able to replace 80% of my team with Mainline bots.
        author: Jonas Kotara
        role: Lead Engineer
        company: Mercury Finance
        image: /testimonials/jonas-kotara.webp
      - quote: Founder Mode is hard enough without having a really nice PM app.
        author: Kevin Yam
        role: Founder
        company: Mercury Finance
        image: /testimonials/kevin-yam.webp
      - quote: I can use the tool as a substitute from my PM.
        author: Kundo Marta
        role: Founder
        company: Mercury Finance
        image: /testimonials/kundo-marta.webp
      - quote: We're misusing Mainline as a CRM and it still works!
        author: Amy Chase
        role: PM
        company: Mercury Finance
        image: /testimonials/amy-chase.webp
      - quote: I was able to replace 80% of my team with Mainline bots.
        author: Jonas Kotara
        role: Lead Engineer
        company: Mercury Finance
        image: /testimonials/jonas-kotara.webp
      - quote: Founder Mode is hard enough without having a really nice PM app.
        author: Kevin Yam
        role: Founder
        company: Mercury Finance
        image: /testimonials/kevin-yam.webp
      - quote: I can use the tool as a substitute from my PM.
        author: Kundo Marta
        role: Founder
        company: Mercury Finance
        image: /testimonials/kundo-marta.webp
  - type: pricing
    enable: true
    title: Pricing
    description: Use Mainline for free with your whole team. Upgrade to enable
      unlimited issues, enhanced security controls, and additional features.
    plans:
      - name: Free
        monthlyPrice: $0
        yearlyPrice: $0
        description: Free for everyone
        features:
          - Unlimited members
          - 2 teams
          - 500 issues
          - Slack and Github integrations
      - name: Startup
        monthlyPrice: $8
        yearlyPrice: $6
        features:
          - All free plan features and...
          - Mainline AI
          - Unlimited teams
          - Unlimited issues and file uploads
          - Mainline Insights
          - Admin roles
      - name: Enterprise
        monthlyPrice: $8
        yearlyPrice: $6
        features:
          - All free plan features and...
          - Mainline AI
          - Supermainline AGI
          - Free daily catered lunch
          - random HIPPA audits
  - type: faq
    enable: true
    title: Got Questions?
    description: If you can't find what you're looking for, <a href="/contact"
      class="underline underline-offset-4">get in touch</a>.
    categories:
      - title: Support
        questions:
          - question: How do I update my account without breaking my laptop?
            answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptates deserunt officia temporibus dignissimos.
          - question: Is support free, or do I need to Google everything?
            answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptates deserunt officia temporibus dignissimos.
          - question: Are you going to be subsumed by AI?
            answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptates deserunt officia temporibus dignissimos.
      - title: Your account
        questions:
          - question: Is support free, or do I need to Google everything?
            answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptates deserunt officia temporibus dignissimos.
          - question: Are you going to be subsumed by AI?
            answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptates deserunt officia temporibus dignissimos.
      - title: Other questions
        questions:
          - question: Is support free, or do I need to Google everything?
            answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptates deserunt officia temporibus dignissimos.
          - question: Are you going to be subsumed by AI?
            answer: Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptates deserunt officia temporibus dignissimos.
---
​
