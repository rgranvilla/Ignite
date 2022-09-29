export const data = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=50',
      name: 'Castro Goncalves',
      role: 'Web Design'
    },
    content: [
      { id: 2, type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        id: 3,
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { id: 4, type: 'link', content: 'jane.design/doctorcare' },
      { id: 5, type: 'tag', content: '#novoprojeto' },
      { id: 6, type: 'tag', content: '#nlw' },
      { id: 7, type: 'tag', content: '#rocketseat' }
    ],
    publishedAt: new Date('2022-09-26 20:15:23')
  },
  {
    id: 8,
    author: {
      avatarUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=50',
      name: 'Aline Magalhães',
      role: 'UX/UI Design'
    },
    content: [
      { id: 9, type: 'paragraph', content: 'Fala pessoal 👋' },
      {
        id: 10,
        type: 'paragraph',
        content:
          'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 '
      },
      { id: 11, type: 'link', content: 'devonlane.design' },
      { id: 12, type: 'tag', content: '#uiux' },
      { id: 13, type: 'tag', content: '#userexperience' }
    ],
    publishedAt: new Date('2022-09-26 10:32:03')
  }
];
