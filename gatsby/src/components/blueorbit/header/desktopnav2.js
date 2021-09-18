import React from "react";

import LogoImg from '../../images/logo.svg';

export default function DesktopNav( menu ) {
	return(
	<>
    	<div class="hidden lg:block w-full text-gray-700 px-5 xl:px-0 bg-white fixed top-0 animated z-40">
      		<div class="flex flex-col max-w-screen-xl mx-auto lg:items-stretch lg:justify-between lg:flex-row">
        		<div class="py-3 px-6 lg:px-0 flex flex-row items-center justify-between">
					<a href="#" class="tracking-widest rounded-lg focus:outline-none focus:shadow-outline">
						<img src={LogoImg} class="w-2/4" />
					</a>
          			<button class="lg:hidden rounded-lg focus:outline-none focus:shadow-outline">
            			<span class="text-lg text-primary">
            				<i class="fa fa-bars color-accent"></i>
            			</span>
          			</button>
        		</div>	

        		{/* START DesktopNav */}
				<nav class="desktop-nav flex-col flex-grow pb-4 lg:pb-0 hidden lg:flex lg:justify-end lg:flex-row">
			    	<div class="relative">
			        	<a class="h-full flex flex-row items-center w-full xl:px-5 px-5 lg:px-3 py-1 mt-2 text-sm text-left bg-transparent md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-200 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
			        		<span class="text-base text-primary">About Us<i class="ml-2 hidden lg: fa fa-chevron-down color-primary"></i></span>
			        	</a>
			        	<div class="hidden absolute left-0 w-full origin-top-right shadow-lg md:w-64">
			            	<div class="px-2 py-2 bg-white shadow">
			                <a class="block px-4 py-4 mt-2  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="#">Testimonials</a
			                    >
			                <a
			                    class="block px-4 py-4 mt-2  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			                    href="#"
			                    >Who We Partner With</a
			                    >
			                <a
			                    class="block px-4 py-4 mt-2  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			                    href="#"
			                    >Careers</a
			                    >               
			            </div>
			        </div>
			    </div>
			    <div
			        class="relative"
			        >
			        <a
			            class="h-full flex flex-row items-center w-full xl:px-5 px-5 lg:px-3 py-1 mt-2 text-sm text-left bg-transparent md:w-auto md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-200 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			            >
			        <span class="text-base text-primary"
			            >Services<i class="ml-2 fa fa-chevron-down color-primary"></i></span>
			        </a>
			        <div
			            class="hidden lg:block absolute left-0 w-full origin-top-right shadow-lg md:w-64"
			            >
			            <div class="px-2 py-2 bg-white shadow">
			                <a
			                    class="block px-4 py-4 mt-2  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			                    href="#"
			                    >Social Media Management</a
			                    >
			                <a
			                    class="block px-4 py-4 mt-2  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			                    href="#"
			                    >Paraplanning</a
			                    >
			                <a
			                    class="block px-4 py-4 mt-2  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			                    href="#"
			                    >Administration Support</a
			                    >
			                <a
			                    class="block px-4 py-4 mt-2  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			                    href="#"
			                    >Client Servicing Support</a
			                    > 
			                <a
			                    class="block px-4 py-4 mt-2  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			                    href="#"
			                    >Chasing Service</a
			                    > 
			                <a
			                    class="block px-4 py-4 mt-2  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			                    href="#"
			                    >Cashflow Modelling</a
			                    >                                                
			            </div>
			        </div>
			    </div>
			    <a
			        class="flex items-center px-5 py-1 mt-2 text-lg lg:px-3 xl:px-5 text-primary md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			        href="#"
			        >
			    <span class="text-base text-primary"
			        >Meet your Team</span>
			    </a>  
			    <div
			        class="relative"
			        >
			        <a
			            class="h-full flex flex-row items-center w-full px-5 xl:px-5 py-1 lg:px-3 mt-2 text-sm text-left bg-transparent md:w-auto md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			            >
			        <span class="text-base text-primary"
			            >Resources
			        <i class="fa fa-chevron-down color-primary"></i></span>
			        </a>
			        <div
			            class="hidden absolute left-0 w-full origin-top-right shadow-lg md:w-64"
			            >
			            <div class="px-2 py-2 bg-white shadow">
			                <a
			                    class="block px-4 py-4  bg-transparent  text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			                    href="forum.html"
			                    >Provider Database</a
			                    >
			            </div>
			        </div>
			    </div>
			    <a
			        class="flex items-center px-5 py-1 mt-2 text-lg lg:px-3 xl:px-5 text-primary md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			        href="#"
			        >
			    <span class="text-base text-primary"
			        >News &amp; Views</span>
			    </a>                   
			    <div
			        class="relative"
			        >
			        <a
			            class="h-full flex flex-row items-center w-full px-5 lg:px-3 xl:px-5 py-1 mt-2 text-sm text-left bg-transparent md:w-auto md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			            >
			        <span class="text-base text-primary">
			        Contact Us
			        <i class="ml-2 fa fa-chevron-down color-primary"></i>
			        </span>
			        </a>
			        <div
			            class="hidden absolute left-0 w-full origin-top-right shadow-lg md:w-64"
			            >
			            <div class="px-2 py-2 bg-white shadow">
			                <a
			                    class="block px-4 py-4  bg-transparent text-md md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-purple-50 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
			                    href="forum.html"
			                    >Leave us a Testimonial</a
			                    >
			            </div>
			        </div>
			    </div>
			    <div
			        class="relative"
			        >
			        <a
			            class="h-full flex color-white flex-row items-center w-full xl:px-5 px-5 lg:px-3 py-1 text-sm text-left bg-accent md:w-auto md:mt-0 md:ml-2 hover:opacity-75 focus:outline-none cursor-pointer focus:shadow-outline"
			            href="tel:01515591332 "
			            >
			        <span class="text-lg text-primary"
			            ><i class="fa fa-phone mr-2"></i>Let's Talk</span>
			        </a>
			    </div>     
			</nav>
			{/* END DesktopNav */}
		</div>
	</div>
	</>
	)
}