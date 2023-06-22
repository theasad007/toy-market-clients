
import breadcumbBG from '../../../assets/images/bg-breadcrumb.jpg'
// eslint-disable-next-line react/prop-types
const PageBanner = ({children}) => {
    return (
        <div className='page-banner py-16' style={{background:`url(${breadcumbBG}) no-repeat scroll bottom center / cover`}}>
            <div className="container">
                    <div className="section-title text-center">
                        <h1 className='text-4xl font-extrabold'>{children}</h1>
                    </div>
                </div>
            
        </div>
    );
};

export default PageBanner;