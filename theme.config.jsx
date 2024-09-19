export default {
    logo: <span>My Memorybook</span>,
    project: {
      link: 'https://github.com/dedkola'
      
    },
    head: (
      <>
     
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="Nextra" />
        <meta property="og:description" content="The next site builder" />
    
      </>

    ),
    //add `Docs` to title
    useNextSeoProps() {
      return {
        titleTemplate: '%s – Docs'
      }
    }
    

  }

