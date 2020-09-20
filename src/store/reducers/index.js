import { getKanban } from '../actions'
import { GET_KANBAN } from '../actionTypes'

const initialState = {
  columns: [
    {
      name: 'Backlog',
      tasks: [
        {
          title: 'Nulla volutpat aliquam velit',
          short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          assigned: 'Ozzy Zon',
          color: '#3591FB'
        },
        {
          title: 'Facilisis in pretium nisl aliquet',
          short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          assigned: 'Le Ann',
          color: '#915AFF',
          dueDate: '2020-09-18 00:00:00'
        },
        {
          title: 'Edet porttitor lorem',
          short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          assigned: 'Max Emmy',
          color: '#C335FB'
        }
      ]
    },
    {
      name: 'Todo',
      tasks: [
        {
          title: 'Edet porttitor lorem',
          short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          assigned: 'Amy Mop',
          color: '#35CDFB',
          dueDate: '2020-09-20 00:00:00'
        },
        {
          title: 'Consectetur adipiscing slit',
          short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          assigned: 'Ozzy Zon',
          color: '#3591FB',
          dueDate: '2020-09-23 00:00:00'
        },
        {
          title: 'Nulla volutpat aliquam velit',
          short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          assigned: 'Le Ann',
          color: '#915AFF',
          dueDate: '2020-10-21 00:00:00'
        }
      ]
    },
    {
      name: 'Done',
      tasks: [
        {
          title: 'Ac tristique libero volutpat at',
          short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          assigned: 'Le Ann',
          color: '#915AFF',
          dueDate: '2020-09-13 00:00:00',
          completed: true
        },
        {
          title: 'Phasellus iaculis neque',
          short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          assigned: 'Ozzy Zon',
          color: '#3591FB',
          dueDate: '2020-09-12 00:00:00',
          completed: true
        },
        {
          title: 'Facilisis in pretium nisl aliquet',
          short: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          assigned: 'Amy Mop',
          color: '#35CDFB',
          completed: true
        }
      ]
    }
  ]
}

const kanbanApp = (state = initialState, actions) => {
  switch (actions.type) {
    case GET_KANBAN:
      return {
        ...state
      }
    default:
      return state;
  }
}

export default kanbanApp;