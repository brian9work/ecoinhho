import MenuItems from './MenuItems';
import { ButtonLinkYellow } from 'components/general/Button';


export default function Menu({ menuState }) {
    const [menu, setMenu] = menuState

    return (
        <div className={` bg-red-700 absolute top-24 transition-all w-full z-10 fondoHeader py-16 ${menu ? "left-0 z-30" : "-left-full -z-10"  } `}
            style={{
                height: "calc(100vh - 6rem)"
            }}
        >
            <div className='absolute top-0 right-0 h-full w-full pt-10 mx-auto '
                style={{
                    maxWidth: "500px",
                    height: "calc(100vh - 6rem)"
                }}
            >
                <div className='w-11/12 mx-auto h-full'>
                    <MenuItems />
                    <div className='absolute bottom-5 right-10 mr-10 mb-7 max-w-80 w-8/12 '>
                        <ButtonLinkYellow href={""}>Contactar</ButtonLinkYellow>
                    </div>
                </div>
            </div>
        </div>
    )
}