---
title: Home
sections:
  - section_id: hero
    component: hero_block.html
    type: heroblock
    content: >-
       I'm a developer. I am very excited about the development communities, entrepreneurship and especially open source.
  - section_id: about
    component: content_block.html
    type: contentblock
    title: About
    content: >-
    actions:
      - label: Contact Me
        url: /contact
  - section_id: recent-posts
    component: posts_block.html
    type: postsblock
    title: Recent Posts
    num_posts_displayed: 4
    actions:
      - label: View Blog
        url: blog/index.html
layout: home
menu:
  main:
    weight: 1
    name: Home
---
