/**
 * Created by alexis_moreau on 10/01/2017.
 */
import React from 'react';
import { FlowRouter } from 'meteor/bensventures:flow-router-ssr';
import { mount } from 'react-mounter';
import AppLayout from './ui/layout/app-layout.jsx';

// Set exposed route
const exposed = FlowRouter.group({});

exposed.route('/', {
  name: 'index',
  action() {
    import('./ui/pages/homepage.jsx').then(({ default: Homepage }) => {
      mount(AppLayout, {
        content: <Homepage />,
      });
    });
  },
});

FlowRouter.notFound = {
  name: '404',
  action() {
    mount(AppLayout, {
      content: <div>not found</div>,
    });
  },
};
