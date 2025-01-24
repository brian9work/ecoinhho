import Logo from 'components/general/Logo';
import LinksMenu from '@/data/LinksMenu';
import MenuItems from './MenuItems';
import { ButtonLinkYellow } from '../general/Button';
// import imagen from "@/assets/imagen.jpg"


export default function Menu({ menuState }) {
    const [menu, setMenu] = menuState

    return (
        <div className={`absolute top-24 transition-all w-full z-10 fondoHeader py-16 ${menu ? "left-0" : "-left-full"  } `}
            style={{
                height: "calc(100vh - 6rem)"
            }}
        >
            <div className='absolute top-0 right-0 h-full w-full pt-10 mx-auto'
                style={{
                    maxWidth: "500px",
                    height: "calc(100vh - 6rem)"
                }}
            >
                <div className='w-11/12 mx-auto h-full'>
                    <MenuItems />
                    <div className='absolute bottom-10 right-10 mr-10 mb-7 max-w-80 w-8/12 '>
                        <ButtonLinkYellow href={""}>Contactar</ButtonLinkYellow>
                    </div>
                </div>
            </div>
        </div>
    )
}

// import Logo from 'components/general/Logo';
// import LinksMenu from '@/data/LinksMenu';
// import MenuItems from './MenuItems';
// import { ButtonLinkYellow } from '../general/Button';
// // import imagen from "@/assets/imagen.jpg"


// export default function Menu({ menuState }) {
//     const [menu, setMenu] = menuState
//     console.log(menu)

//     return (
//         <div className={`h-screen absolute top-0 right-0 w-full z-10 `}>
//             <div className='relative h-full'>
//                 <div
//                     className={`w-6/12 absolute  top-0 h-full transition-transform ${menu ? 'translate-x-0' : '-translate-x-full'}`}
//                     style={{
//                         backgroundImage: `url("http://localhost/ecoinhho/src/assets/imagen.jpg")`,
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
                        
//                         // transitionDuration: '2000ms',
//                         // transform: `translateX(${menu ? '10%' : '-100%'})`
//                     }}
//                 >
//                 </div>
//                 <div className={`
//                     absolute top-0 
//                     fondoHeader
//                     w-full h-full 
//                     transition-transform
//                     ${menu ? 'translate-x-0' : 'translate-x-full'}
//                     `}>
//                     <div className=' ml-auto mr-7 w-11/12 md:w-6/12 '>
//                         <div className='py-5' onClick={() => setMenu(!menu)}>
//                             <Logo />
//                         </div>
//                         <MenuItems LinksMenu={LinksMenu} />
//                     </div>
//                     <div className='absolute bottom-0 right-0 mr-10 mb-7 max-w-80 w-8/12 '>
//                         <ButtonLinkYellow href={""}>Contactar</ButtonLinkYellow>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }
