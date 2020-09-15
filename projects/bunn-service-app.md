---
title: Asset Tracking Prototype
org: BUNN
challenge: Prototype an app concept that would make the process creating an inventory of equipment at a location and making it easy to request service.
role: Lead UX, UI design, and development of mobile web prototype and demonstrated for a customer
cover: /img/service-cover-2.png
date: 2018-05-01
layout: project.njk
---

<figure class="py-8">
    <img src="{{ cover }}" alt="" class="block mx-auto">
</figure>

## Challenge

{{ challenge }}

## My Role

{{ role }}

## Details

Our digital team consulted with our service department to create an app that would allow the capturing service-able equipment at a location and make it easy to request service on that equipment. We created a usable, browser-based web app prototype that used the native camera to scan a QR code for any piece of beverage equipment and associate it with a geographical location. Once added, a customer could populate additional information about the equipment that would help streamline the process of requesting future service.

<figure class="mb-8">
    <img src="/img/service-whiteboard.jpg" alt="Service whiteboard" class="block w-full" />
</figure>

After some whiteboarding with the team and the product owners, we created a low-fidelity prototype using Sketch and Invision so we could quickly gather some early feedback.

<!-- <figure class="bg-gray-200 hidden relative lg:block">
    <img src="/img/service-cover-1.png" alt="Service app cover" class="block m-auto relative" style="width: 668px;" />
    <img src="/img/service-animation.gif" alt="Service demos" class="block m-auto absolute pt-4" style="width: 278px; left: 196px; top: 125px; background: #444" />
</figure> -->

<figure>
    <img src="/img/service-screens-1.jpg" alt="Service screens Invision" class="lg:max-w-none lg:w-1.5x lg:-ml-1/4 xl:w-2x xl:-ml-1/2" />
</figure>

<a href="https://invis.io/N7YO1PJP9TA#/387229480_0_Home_-_Default" class="underline leading-none flex items-center font-bold hover:text-gray-600 my-12">
    <span>Try out the prototype</span>
    <span class="inline-block w-4 ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" /></svg></span>
</a>

After some initial testing over a few Webex demonstrations, we had enough feedback to continue iterating. We also took the opportunity to increase fidelity a little, now that we were feeling a little more certain about some of the elements that would remain in the design.

<figure class="py-8">
    <img src="/img/service-screens-2.jpg" alt="Service screens Sketch" class="block mx-auto">
</figure>

After a few more rounds of testing, we determined we had enough validation to move the prototype to the browser. We wanted to start testing with native mobile features, such as a camera, as well as the impacts of saving the app to the home screen as a Progressive Web App (PWA). We threw the web app on Netlify so we could test with external users, and we powered it with some real data using MongoDB. 

We were eventually able to demonstrate the end-to-end user experience involving the following tasks:

* Add a new location
* Add new equipment assets and associating them with a location
* Edit an existing asset
* View documentation and setup videos associated with an asset
* Request service for an asset

The prototype helped us uncover a lot of systems and processes that would need to be improved or developed outside of the app: 

* Streamline the approach for printing and pre-associating a QR code to an asset, along with establishing a new database to store this association
* Understand that we would need to deploy a workforce of people to go tag all assets at existing locations
* Set up new infrastructure for hosting the application and the data
* Determine a strategy for customizing the app for unique customers

Overall, the app helped answer some immediate questions, as well as create many more. In the short span of two weeks, and zero external spend, we had a functioning prototype that was deployed and ready to wire up to a true infrastructure. The prototype ultimately helped us determine that the investment required wasn't worth the short-term ROI, but was worth considering as a potential future project.