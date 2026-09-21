const homePage = '<div class="home"><h1>Welcome to my Website</h1><img src="images/download.webp" alt="Website Image"><p>Thank you for checking this website out. Ive put a lot of work into it...</p></div>'

const aboutPage = '<div class="home"><h1>About Page</h1><img src="images/OIP.webp" alt="Website Image"><p>We here at <span id="insert">{Insert company name}</span> are pround of doing the things that we do</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur architecto dolorum odio, quae, quasi ullam porro iusto reprehenderit excepturi quis ex corrupti maxime soluta sequi nisi quos odit dignissimos, assumenda alias! Rerum exercitationem nobis laboriosam. Quo aperiam labore suscipit iusto? Expedita dolorem, omnis nobis veniam provident repellat doloremque blanditiis enim ab aspernatur quod magni dolore tenetur placeat dolor ullam dolores deleniti libero ipsa numquam, harum nulla? Voluptatibus, sunt hic?</p></div>'

const servicesPage = '<div class="home"><h1>Services</h1><img src="images/OIP (1).webp" alt="Website Image"><p>We love helping our clients by provinding with <span id="insert">{solutions}</span> when it comes to their needs.</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur architecto dolorum odio, quae, quasi ullam porro iusto reprehenderit excepturi quis ex corrupti maxime soluta sequi nisi quos odit dignissimos, assumenda alias! Rerum exercitationem nobis laboriosam. Quo aperiam labore suscipit iusto? Expedita dolorem, omnis nobis veniam provident repellat doloremque blanditiis enim ab aspernatur quod magni dolore tenetur placeat dolor ullam dolores deleniti libero ipsa numquam, harum nulla? Voluptatibus, sunt hic?</p></div>'

const ContactPage = '<div class="home"><h1>Contact</h1><img src="images/hey-you-call-me-bearded-260nw-2115572930.webp" alt="Website Image"><p>If you have any questions plese contact us on the following media: <span id="insert">{7}</span></p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consequatur architecto dolorum odio, quae, quasi ullam porro iusto reprehenderit excepturi quis ex corrupti maxime soluta sequi nisi quos odit dignissimos, assumenda alias! Rerum exercitationem nobis laboriosam. Quo aperiam labore suscipit iusto? Expedita dolorem, omnis nobis veniam provident repellat doloremque blanditiis enim ab aspernatur quod magni dolore tenetur placeat dolor ullam dolores deleniti libero ipsa numquam, harum nulla? Voluptatibus, sunt hic?</p></div>'

const pages = {
    home_link: homePage,
    about_link: aboutPage,
    services_link: servicesPage,
    contact_link: ContactPage,
};

export function changePage(pageName) {
    document.querySelector('#app').innerHTML = pages[pageName];
}