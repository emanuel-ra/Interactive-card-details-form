/** @type {import('tailwindcss').Config} */
module.exports = {  
  content: ["./*.{html,js}"],
  theme: {
    extend: {      
      backgroundColor: theme => ({
        'red':'var(--red)' ,
        'white':'var(--white)' ,
        'light-grayish-violet':'var(--light-grayish-violet)' ,
        'dark-grayish-violet':'var(--dark-grayish-violet)' ,
        'very-dark-violet':'var(--very-dark-violet)' ,
      }),
      fontFamily: theme => ({
        'Space' : ['Space Grotesk', 'sans-serif']
      }),
      backgroundImage: theme => ({
        'desktop':"url('../images/bg-main-desktop.png')" ,
        'mobile':"url('../images/bg-main-mobile.png')" ,
        'card-front':"url('../images/bg-card-front.png')" ,
        'card-back':"url('../images/bg-card-back.png')" ,
      }),
      textColor: theme => ({
        'red':'var(--red)' ,
        'white':'var(--white)' ,
        'light-grayish-violet':'var(--light-grayish-violet)' ,
        'dark-grayish-violet':'var(--dark-grayish-violet)' ,
        'very-dark-violet':'var(--very-dark-violet)' ,
      }),
      borderColor: theme = ({
        'red':'var(--red)' ,
      }),
    },
  },
  plugins: [],
}