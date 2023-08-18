import { generatePath } from 'react-router-dom';
import routes from './Routes'

export const url = (path, params) => {

    let lastRoute, url;

    // path -->  'home.blog.catagories'
    // tur 0: 
    // lastRoute: ...
    // url: ...
    // tur 1:
    // lastRoute: home
    // url: /
    // tur 2:
    // lastRoute: blog
    // url: /blog/
    // tur 3:
    // lastRoute: cataories
    // url: /blog/catagories/

    path.split('.').map( el => {
        if(!lastRoute){
            lastRoute = routes.find( route => route.name === el)
            url = lastRoute.path
        }else{
            lastRoute = lastRoute.children.find( route => route.name === el)
            url += '/' + lastRoute.path
        }
    })

    // console.log(url.slice(0, -1)) // url --> /blog/catagories

    return generatePath(  
        // url.slice(0, -1), 
        url.replace(/\/\//gi, '/'),
        params )
}