import React from 'react'
import Basic from '../components/galleries/Basic'
import animal1 from './images/animals/boris-smokrovic-DPXytK8Z59Y-unsplash.jpg'
import animal2 from './images/animals/david-clode-0lwa8Dprrzs-unsplash.jpg'
import animal3 from './images/animals/josephine-menge-h7VBJRBcieM-unsplash.jpg'
import animal4 from './images/animals/gary-bendig-6GMq7AGxNbE-unsplash.jpg'
import animal5 from './images/animals/pietro-jeng-0Sd2qqU5soQ-unsplash.jpg'

export default {
  title: 'Galleries'
}
const images = [animal1, animal2, animal3, animal4, animal5]

export const BasicGallery = () => <Basic images={images} />
