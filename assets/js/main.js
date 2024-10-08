Fancybox.bind("[data-fancybox]", {
    // Your custom options
});


$('.team-slider').slick({
    centerMode: false,
    centerPadding: '60px',
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        ,
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});


$('.partners-slider').slick({

    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    draggable: false,           // Enables autoplay

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


$('.project-slider').slick({
    arrows: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$(".projects .slider-nav .arrow-right").click(
    () => {
        $(".projects .slick-next").click();
    }
)
$(".projects .slider-nav .arrow-left").click(
    () => {
        $(".projects .slick-prev").click();
    }
)
$(".works .slider-nav .arrow-right").click(
    () => {
        $(".works .slick-next").click();
    }
)
$(".works .slider-nav .arrow-left").click(
    () => {
        $(".works .slick-prev").click();
    }
)

document.addEventListener("DOMContentLoaded", function () {
    const playBtn = document.getElementById('playBtn');
    const videoPopup = document.getElementById('videoPopup');
    const closeBtn = document.getElementById('closeBtn');
    const videoPlayer = document.getElementById('videoPlayer');
    let popupShown = false; // Flag to ensure the popup shows only once

    // Function to open the video popup
    function openVideoPopup() {
        videoPopup.style.display = 'flex';

        // Load the video source dynamically when the popup is opened
        if (!videoPlayer.getAttribute('src')) {
            videoPlayer.setAttribute('src', 'https://new.businessenquiry.co.in/montech-demo.mp4'); // Replace with your video file URL
            videoPlayer.load();
        }
    }

    // Event listener for the play button
    playBtn.addEventListener('click', function () {
        openVideoPopup();
    });

    // Function to close the video popup
    closeBtn.addEventListener('click', function () {
        videoPopup.style.display = 'none';
        videoPlayer.pause();  // Pause the video when popup is closed
        videoPlayer.removeAttribute('src');  // Remove the video source
    });

    // Function to show the popup when scrolling past a certain point
    window.addEventListener("scroll", function () {
        if (!popupShown) {
            // Get the scroll position
            const scrollPosition = window.scrollY;

            // Define the scroll threshold (e.g., 500px)
            const scrollThreshold = 2000;

            if (scrollPosition > scrollThreshold) {
                openVideoPopup();
                popupShown = true; // Set the flag to true to prevent future triggers
            }
        }
    });
});

// document.addEventListener("DOMContentLoaded", function () {
//     const galleryWrapper = document.querySelector('.gallery-wrapper');
//     const totalImages = 30; // Total number of images
//     const slides = 2;

//     for (let i = 1; i <= slides; i++) {
//         const gallerySlide = document.createElement('div');
//     }

//     for (let i = 1; i <= totalImages; i++) {
//         const imgDiv = document.createElement('div');
//         imgDiv.className = 'gallery-image';

//         const imgElement = document.createElement('img');
//         imgElement.src = `./assets/img/montech-gallery/${i}.webp`;
//         imgElement.alt = `gallery-image-${i}`;
//         imgElement.style.width = '100%';
//         imgElement.style.height = '200px';
//         imgElement.style.objectFit = 'cover';

//         imgDiv.appendChild(imgElement);
//         galleryWrapper.appendChild(imgDiv);
//     }
// });





