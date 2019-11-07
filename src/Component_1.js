import React from 'react';

const arr1 = [
    {
      title: 'Maecenas luctus',
      body: 'Nullam non wisi a sem semper eleifend. Donec mattis libero eget urna. Duis pretium velit ac suscipit mauris. Proin eu wisi suscipit nulla suscipit interdum.',
    },
    {
      title: 'Integer gravida',
      body: 'Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem semper suscipit eleifend. Donec mattis libero eget urna. Duis velit ac mauris.'
    },
    {
      title: 'Praesent mauris',
      body: 'Donec mattis libero eget urna. Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum. Nullam non wisi a sem suscipit eleifend.'
    }
  ]

const Component_1 = () =>{
    return(
        <div className="container" id="three-column">
        { arr1.map((item, index) =>{
            return(
              <div key = { index } id="tbox1">
                <div class="title">
                  <h2>Maecenas luctus</h2>
                </div>
                <p>{ item.body }</p>
                <a href="#" class="button">Learn More</a>
              </div>
            )
        })
        }
      </div>
    )
}
export default Component_1
