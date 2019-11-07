import React from 'react';

const arr2 = [
    {
      img: 'scr01.jpg',
      title: 'Vestibulum venenatis',
      body: 'Fermentum nibh augue praesent a lacus at urna congue rutrum.'
    },
    {
      img: 'scr02.jpg',
      title: 'Praesent scelerisque',
      body: 'Vivamus fermentum nibh in augue praesent urna congue rutrum.'
    },
    {
      img: 'scr03.jpg',
      title: 'Donec dictum metus',
      body: 'Vivamus fermentum nibh in augue praesent urna congue rutrum.'
    },
    {
      img: 'scr04.jpg',
      title: 'Mauris vulputate dolor',
      body: 'Rutrum fermentum nibh in augue praesent urna congue rutrum.'
    },
  ]

const Component_2 = () =>{
    return(
        <div id="portfolio" class="container">
          { arr2.map((item,index) =>{
              return(
                <div class={`column${index+1}`} key={index}>
                  <div class="box"> <a href="#"><img src={ item.img } alt="" class="image image-full" /></a>
                      <h3>{ item.title }</h3>
                      <p>{ item.body }</p>
                      <a href="#" class="button button-small">Etiam posuere</a>
                   </div>
                </div>  
              )
            })
          }  
       </div>
    )
}
export default Component_2