---
title: Groups
org: Life and Health
challenge: Develop an new online platform allowing organizations to host on-site or remote workshops either for free or as a revenue-generating opportunity for the organization.
role: Consulted with LHN marketing team to re-design and launch an updated platform with an improved user experience and CMS. I Lead UX, UI design, and CMS development.
cover: /img/lhn-groups-cover-4.png
date: 2018-05-01
---

## Challenge

{{ challenge }}

## My Role

{{ role }}

## Details

Life and Health Network (LHN) is a non-profit organization that offers online content and self-guided courses focused on health and well-being. They are well-kwown for their course on addressing the root cause of Diabetes and Prediabetes with simple lifestyle strategies such as nutrition, exercise, comprehensive testing. LHN wanted to offer this course in a group workshop format.

I took over the project in its early stages. Right away, I knew the platform needed some thoughtful design and aesthetic from the start. I proposed a new visual direction for the application, which eventually grew into a fully new design language for the entire experience.

* UX/UI Design
* Frontend Development
* CMS Integration & Custom plugin development
* Customer Experience consulting

### Some before and afters

<div class="pt-20">
{% imageFigure '/img/lhn-groups-before-1.jpg', 'LHN screenshot', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'Before (Login)' %}
{% endimageFigure %}
{% imageFigure '/img/lhn-groups-after-1.jpg', 'LHN screenshot', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'After (Login)' %}
{% endimageFigure %}
{% imageFigure '/img/lhn-groups-before-2.jpg', 'LHN screenshot', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'Before (Dashboard)' %}
{% endimageFigure %}
{% imageFigure '/img/lhn-groups-after-2.jpg', 'LHN screenshot', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'After (Dashboard)' %}
{% endimageFigure %}
{% imageFigure '/img/lhn-groups-before-3.jpg', 'LHN screenshot', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'Before (Workshop)' %}
{% endimageFigure %}
{% imageFigure '/img/lhn-groups-after-3.jpg', 'LHN screenshot', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'After (Workshop)' %}
{% endimageFigure %}
</div>

By taking a componentized approach to designing interface elements, I was able to deliver consistent visual language for the online experience. I tested the concepts with various customers to get feedback on things like onboarding, creating workshops, purchasing materials and getting support.

### Process

Beginning with the call to action on their current marketing site, I prototyped a new onboarding experience to test first.

{% imageFigure '/img/lhn-groups-flow-1.jpg', 'LHN screenshot' %}
{% imageCallout 'Onboarding flow' %}
{% endimageFigure %}

{% imageFigure '/img/lhn-groups-onboarding-prototype.jpg', 'LHN screenshot', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'Onboarding prototype' %}
{% endimageFigure %}

From there, we continued to design additonal portions of the application with prioirty on the most-important features. We tested each iteration with a couple customers along the way over shared video calls. We eventually worked our way through all major features of the application.

As we started to develop a consistent design language for the application, we made sure to document common guidelines and components in a styleguide. This would ensure success for the eventual hand-off to Life and Health's internal team to continue maintaining and enhancing the app in the future.

Due to the simplicity of the application, we decided not to use a bloated frontend framework, such as Foundation or Bootstrap in an effort to keep the codebase as lean as possible. We only needed a handful of responsive components, which we built into the styleguide. Components included:

* Brand colors
* Base Typography settings
* A hand-rolled, responsive CSS grid system, with support for nested grid
* Button and link styles complete with a variety of primary and secondary actions
* Form styles
* Notices and alerts
* Step progress indicators
* A beautiful login page
* Dark and light options for the main header/navigation
* Panels complete with headers, body sections and footers, and options for flat and raised appearance

This combination of basic components gave us a solid foundation that would serve us very well as the application grew and evolved.

{% imageFigure '/img/lhn-groups-styleguide.jpg', 'LHN styleguide', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'Styleguide' %}
{% endimageFigure %}

{% imageFigure '/img/lhn-groups-styleguide-grid.jpg', 'LHN styleguide', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'Custom CSS Grid' %}
{% endimageFigure %}

### Beyond design and development

In order to ensure we were supporting the full end-to-end customer experience, I advocated for evaluating the user experience beginning with the marketing funnel, all the way through to customer support. It's great that users had a brand new, easier to use experience with the updated LHN Groups app, but the experience doesn't always begin and end with the app. So, we decided to implement an updated marketing landing page, and a true customer support capability.

#### New marketing landing page

We hashed through some design concepts in low-fidelity wireframes, and ultimately landed on something we decided we should test first. The low fidelity wireframes helped keep us focused on the goals the page would help accomplish without getting bogged down into the details. The landing page has been through, and continues to go through many iterations.

{% imageFigure '/img/lhn-groups-landing-page-redesign.jpg', 'LHN Groups Landing Page Redesig', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'Marketing Page Redesign' %}
{% endimageFigure %}

#### Improved customer support capability

For the customer support capability, I recommended [Intercom](https://www.intercom.com/). Intercom gave us the ability to serve or support the customer all the way through the entire experience, from marketing, to application use, to general support. A few things we used Intercom for:

* Welcome potential customers to the landing page, offering a proactive helping hand
* Assisting customers if they lingered on a particular page for a very long time
* Simple chat-style support throughout onboarding and online experience
* A simple, omni-present support channel for any questions or help

{% imageFigure '/img/lhn-groups-intercom-1.jpg', 'LHN styleguide', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'Intercom Customer Support Channel' %}
{% endimageFigure %}

{% imageFigure '/img/lhn-groups-intercom-2.jpg', 'LHN styleguide', 'lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2 border border-gray-300' %}
{% imageCallout 'Intercom Customer Support Channel' %}
{% endimageFigure %}