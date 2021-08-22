    $(document).ready(function(){
                    $(".customer-logos").slick({
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 1200,
                        arrows: false,
                        dots: true,
                        pauseOnHover: false,
                        responsive: [{
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 4
                            }
                        }, 
                        {
                            breakpoint: 520,
                            settings: {
                                slidesToShow: 3
                            }
                        }
                        ]
                    });
                });

    


    $(document).on('click','.project-filter li',function(){
            $(this).addClass('project-filter-active').siblings().removeClass('project-filter-active')
        });
        
     /*project-filter---------------------------------*/
     $(document).ready(function(){
            $('.list').click(function(){
                const value = $(this).attr('data-filter');
                if(value == 'all'){
                    $('.project-box').show('1000');
                }
                else{
                    $('.project-box').not('.'+value).hide('1000');
                    $('.project-box').filter('.'+value).show('1000');
                }
            });
        });