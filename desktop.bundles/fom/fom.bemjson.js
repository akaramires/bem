/**
 * Created by Elmar <a.k.a. Ramires> Abdurayimov on 5/18/15 4:07 PM
 * @copyright (C)Copyright 2015 e.abdurayimov@gmail.com
 */

({
    block  : 'page',
    title  : 'Frame of Mind',
    head   : [
        {
            elem: 'css',
            url : 'fonts.css'
        },
        {
            elem: 'css',
            url : '_fom.css'
        }
    ],
    scripts: [
        {
            elem: 'js',
            url : '_fom.js'
        }
    ],
    content: [
        {
            block  : 'header',
            mods   : {
                bg: 'red'
            },
            content: [
                {
                    elem   : 'subscribe',
                    mix    : [
                        {
                            block: 'text',
                            elem : 'center'
                        }
                    ],
                    content: [
                        {
                            block  : 'container',
                            mix    : [
                                {
                                    block: 'header',
                                    elem : 'container'
                                }
                            ],
                            content: [
                                {
                                    elem   : 'content',
                                    block  : 'header',
                                    mods   : {
                                        color: 'white'
                                    },
                                    content: 'Get your free "What You Focus on GROWS" e-book by Kim Ades '
                                },
                                {
                                    block  : 'form',
                                    mix    : [
                                        {
                                            block: 'header',
                                            elem : 'form'
                                        }
                                    ],
                                    content: [
                                        {
                                            block  : 'control-group',
                                            mods   : {
                                                with: 'icon'
                                            },
                                            content: [
                                                {
                                                    block: 'icon',
                                                    mods : {
                                                        type : 'envelope',
                                                        color: 'white',
                                                        size : 's'
                                                    }
                                                },
                                                {
                                                    block      : 'input',
                                                    mods       : {
                                                        size: 's',
                                                        type: 'transparent'
                                                    },
                                                    placeholder: 'Enter your email Address'
                                                },
                                                {
                                                    block: 'button',
                                                    mods : {
                                                        size : 's',
                                                        bg   : 'white',
                                                        color: 'red'
                                                    },
                                                    text : 'Sign Up'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    elem   : 'navbar',
                    content: []
                }
            ]
        }
        /*,

         {
         block  : 'header',
         content: [
         {
         elem   : 'container',
         mix    : [
         {
         block: 'container'
         },
         {
         block: 'text',
         elem : 'center'
         }
         ],
         content: [
         {
         elem   : 'box',
         content: [
         {
         elem   : 'title',
         content: 'Get your free "What You Focus on GROWS" e-book by Kim Ades'
         },
         {
         block  : 'form',
         mix    : [
         {
         block: 'header-form'
         }
         ],
         mods   : {
         type: 'envelope'
         },
         content: [
         {
         block: 'icon',
         mix  : [
         {
         block: 'header-form',
         elem : 'icon'
         },
         {
         block: 'form',
         elem : 'icon'
         }
         ],
         mods : {
         type : 'envelope',
         color: 'white'
         }
         },
         {
         block  : 'input',
         elem   : 'group',
         attrs  : {
         'data-toggle' : 'popover',
         'data-trigger': 'focus',
         'data-content': 'And here\'s some amazing content. It\'s very engaging. Right?'
         },
         content: [
         {
         elem : 'input',
         tag  : 'input',
         attrs: {
         type       : 'text',
         placeholder: 'Enter your email Address'
         },
         mix  : [
         {
         block: 'input'
         },
         {
         block: 'header-form',
         elem : 'input'
         }
         ]
         },
         {
         block  : 'btn-group',
         content: [
         {
         tag    : 'a',
         block  : 'btn',
         mods   : {
         color: 'white'
         },
         content: 'Sign Up!'
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'navbar',
         mix    : [
         {
         block: 'header',
         elem : 'navbar'
         }
         ],
         mods   : {
         type: 'fix'
         },
         content: [
         {
         elem   : 'container',
         mix    : [
         {
         block: 'container'
         }
         ],
         content: [
         {
         elem   : 'navbar-toggle',
         attrs  : {
         'data-toggle': 'collapse',
         'data-target': '.navbar-collapse'
         },
         content: [
         {
         elem: 'icon-menu'
         }
         ]
         },
         {
         elem   : 'logo',
         tag    : 'a',
         attrs  : {
         title: 'Frame of Mind'
         },
         content: [
         {
         elem : 'logo-deck',
         tag  : 'img',
         attrs: {
         src: 'http://www.frameofmindcoaching.com/wp-content/themes/fom/assets/built/img/logo.png',
         alt: 'Frame of Mind'
         }
         },
         {
         elem : 'logo-mob',
         tag  : 'img',
         attrs: {
         src: 'http://www.frameofmindcoaching.com/wp-content/themes/fom/assets/built/img/logo_mob.png',
         alt: 'Frame of Mind'
         }
         }
         ]
         },
         {
         block  : 'btn',
         mods   : {
         color: 'gray'
         },
         mix    : [
         {
         block: 'header',
         elem : 'btn_gray'
         }
         ],
         attrs  : {
         'data-toggle': 'modal',
         'data-target': '#modalThanks'
         },
         content: 'Get Started'
         },
         {
         elem   : 'navbar-collapse',
         mods   : {
         state: 'collapse'
         },
         content: [
         {
         block  : 'menu',
         mix    : [
         {
         block: 'header',
         elem : 'menu'
         }
         ],
         content: [
         {
         elem   : 'item',
         content: {
         elem   : 'link',
         tag    : 'a',
         content: {
         elem   : 'title',
         tag    : 'span',
         content: 'Coaching'
         }
         }
         },
         {
         elem   : 'item',
         content: {
         elem   : 'link',
         tag    : 'a',
         content: {
         elem   : 'title',
         tag    : 'span',
         content: 'Our Team'
         }
         }
         },
         {
         elem   : 'item',
         content: {
         elem   : 'link',
         tag    : 'a',
         content: {
         elem   : 'title',
         tag    : 'span',
         content: 'Testimonials'
         }
         }
         },
         {
         elem   : 'item',
         content: {
         elem   : 'link',
         tag    : 'a',
         content: {
         elem   : 'title',
         tag    : 'span',
         content: 'News & Views'
         }
         }
         },
         {
         elem   : 'item',
         content: {
         elem   : 'link',
         tag    : 'a',
         content: {
         elem   : 'title',
         tag    : 'span',
         content: 'Certification'
         }
         }
         },
         {
         elem   : 'item',
         content: {
         elem   : 'link',
         tag    : 'a',
         content: {
         elem   : 'title',
         tag    : 'span',
         content: 'Contact'
         }
         }
         },
         {
         elem   : 'item',
         content: {
         elem   : 'link',
         tag    : 'a',
         content: {
         elem   : 'title',
         tag    : 'span',
         content: 'Sign In'
         }
         }
         },
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'banner',
         content: [
         {
         elem   : 'container',
         mix    : [
         {
         block: 'container'
         }
         ],
         content: [
         {
         elem   : 'row',
         mix    : [
         {
         block: 'row'
         }
         ],
         content: [
         {
         elem   : 'inner',
         mix    : [
         {
         block: 'col-lg-7 col-sm-12 col-xs-12'
         }
         ],
         content: [
         {
         elem   : 'slogan',
         content: 'Your Thinking Will Determine What You Can Achieve...'
         },
         {
         elem   : 'slogan-sub',
         content: 'Frame of Mind Coaching will transform your thinking and lead you to extraordinary results.'
         },
         {
         elem   : 'row',
         mix    : [
         {
         block: 'row'
         }
         ],
         content: [
         {
         elem   : 'inner',
         mix    : [
         {
         block: 'text',
         elem : 'center'
         },
         {
         block: 'col-lg-5 col-md-6 col-xs-6'
         }
         ],
         content: [
         {
         block  : 'btn',
         mix    : [
         {
         block: 'pull-right'
         },
         {
         block: 'banner',
         elem : 'btn'
         }
         ],
         mods   : {
         color: 'red'
         },
         content: 'Start your Assessment'
         }
         ]
         },
         {
         elem   : 'inner',
         mix    : [
         {
         block: 'text',
         elem : 'center'
         },
         {
         block: 'col-lg-5 col-md-6 col-xs-6'
         }
         ],
         content: [
         {
         block  : 'btn',
         mods   : {
         color: 'transparent'
         },
         mix    : [
         {
         block: 'banner',
         elem : 'btn'
         }
         ],
         content: [
         {
         elem   : 'text',
         content: 'Watch Video'
         },
         {
         block: 'icon',
         mix  : [
         {
         block: 'banner',
         elem : 'btn-icon'
         }
         ],
         mods : {
         type: 'play'
         }
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         elem   : 'width_100',
         content: [
         {
         elem   : 'more',
         content: [
         {
         elem   : 'p',
         tag    : 'p',
         content: 'Learn More'
         },
         {
         block: 'icon',
         mix  : [
         {
         block: 'banner',
         elem : 'icon-more'
         }
         ],
         mods : {
         type: 'arrow-down-thin'
         }
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'quote',
         content: [
         {
         elem   : 'container',
         mix    : [
         {
         block: 'container'
         }
         ],
         content: [
         {
         elem   : 'author-photo',
         content: [
         {
         elem : 'photo',
         tag  : 'img',
         attrs: {
         src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2015/01/JM.jpg'
         }
         }
         ]
         },
         {
         elem   : 'txt',
         content: [
         {
         elem   : 'body',
         content: 'I always have felt things will be better when I get to a certain part of my life and return back to “Normal”. I was at the mercy of the waves of life and sometimes I would be knocked down repeatedly by those waves. I always felt as if I was yelling at everyone, biting their heads off (or wanting to)...'
         },
         {
         elem   : 'author',
         content: '- Jilian McDermott'
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'section',
         attrs  : {
         'data-section': 1
         },
         content: [
         {
         elem   : 'container',
         mix    : [
         {
         block: 'container'
         }
         ],
         content: [
         {
         elem   : 'title',
         content: 'Why Frame of Mind Coaching?'
         },
         {
         elem   : 'txt',
         mix    : [
         {
         block: 'narrow-160'
         },
         {
         block: 'text',
         elem : 'center'
         }
         ],
         content: 'Frame of Mind Coaches specialize in coaching highly driven, achievement oriented individuals who are committed to living outstanding lives. The foundation of FOM Coaching is that a person’s thinking has a greater impact on their outcomes than any other contributing factor. As such, FOM Coaches focus on the study and examination of thoughts, beliefs, past experiences, and perspectives in order to make sense of the results that clients generate in their lives. Due to the impact of the coaches, the coaching process, the platform and the focus, clients consistently experience exceptional personal transformation and professional growth.'
         },
         {
         block  : 'row',
         content: [
         {
         block  : 'cols',
         mix    : [
         {
         block: 'col-lg-6 col-md-6 col-xs-12'
         },
         ],
         content: [
         {
         block  : 'row',
         content: [
         {
         block  : 'cols',
         mix    : [
         {
         block: 'col-lg-6 col-sm-6 col-xs-12'
         },
         ],
         content: [
         {
         block  : 'box',
         mods   : {
         type    : 'image',
         location: 'top'
         },
         content: [
         {
         elem   : 'image-wrap',
         content: [
         {
         elem : 'image',
         tag  : 'img',
         mods : {
         size: 'big'
         },
         attrs: {
         src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/Coaches-300x163.jpg'
         }
         },
         {
         block: 'icon',
         tag  : 'i',
         mix  : [
         {
         block: 'box',
         elem : 'icon',
         mods : {
         type: 'people-black'
         }
         }
         ],
         mods : {
         type: 'people-black'
         }
         }
         ]
         },
         {
         elem   : 'title',
         mods   : {
         size: 24
         },
         content: 'Coaches'
         },
         {
         elem   : 'txt',
         content: [
         {
         tag    : 'p',
         content: 'Our coaches are phenomenal.'
         },
         {
         tag    : 'p',
         content: 'FOM Coaches are at the top of their game and in a class by themselves. They are prepared. They are purposeful. They artfully walk you through the coaching process. They are by your side the entire time.'
         },
         {
         tag    : 'p',
         content: 'They Live It.'
         },
         {
         tag    : 'p',
         content: 'They Breathe It.'
         },
         {
         tag    : 'p',
         content: 'And they will help you transform at a mind-blowing pace.'
         },
         {
         tag    : 'p',
         content: 'It takes a particular kind of coach to make the grade.'
         },
         {
         tag    : 'p',
         content: 'And it takes a particular type of client to meet the challenge.'
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'cols',
         mix    : [
         {
         block: 'col-lg-6 col-sm-6 col-xs-12'
         },
         ],
         content: [
         {
         block  : 'box',
         mods   : {
         type    : 'image',
         location: 'top'
         },
         content: [
         {
         elem   : 'image-wrap',
         content: [
         {
         elem : 'image',
         tag  : 'img',
         mods : {
         size: 'big'
         },
         attrs: {
         src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/2-300x200.jpg'
         }
         },
         {
         block: 'icon',
         tag  : 'i',
         mix  : [
         {
         block: 'box',
         elem : 'icon',
         mods : {
         type: 'dots'
         }
         }
         ],
         mods : {
         type: 'dots'
         }
         }
         ]
         },
         {
         elem   : 'title',
         mods   : {
         size: 24
         },
         content: 'Process'
         },
         {
         elem   : 'txt',
         content: [
         {
         tag    : 'p',
         content: '10 weeks, 10 calls, 10 hours of personal recordings and 70 days of journaling.'
         },
         {
         tag    : 'p',
         content: 'Why is journaling so important?',
         attrs  : {
         style: 'font-weight: bold;'
         }
         },
         {
         tag    : 'p',
         content: 'It’s intense. It’s dynamic. It’s deliberate. It’s about driving results.'
         },
         {
         tag    : 'p',
         content: 'Our process is designed to create an unprecedented level of personal insight necessary for clients to experience a radical change at an accelerated rate.'
         },
         {
         tag    : 'p',
         content: 'This is not for people who are scared to move forward or to try new things. It’s for people who are strong-minded and prepared to take a serious look at themselves in order to experience monumental results.'
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'cols',
         mix    : [
         {
         block: 'col-lg-6 col-md-6 col-xs-12'
         },
         ],
         content: [
         {
         block  : 'row',
         content: [
         {
         block  : 'cols',
         mix    : [
         {
         block: 'col-lg-6 col-sm-6 col-xs-12'
         },
         ],
         content: [
         {
         block  : 'box',
         mods   : {
         type    : 'image',
         location: 'top'
         },
         content: [
         {
         elem   : 'image-wrap',
         content: [
         {
         elem : 'image',
         tag  : 'img',
         mods : {
         size: 'big'
         },
         attrs: {
         src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/3-300x200.jpg'
         }
         },
         {
         block: 'icon',
         tag  : 'i',
         mix  : [
         {
         block: 'box',
         elem : 'icon',
         mods : {
         type: 'book'
         }
         }
         ],
         mods : {
         type: 'book'
         }
         }
         ]
         },
         {
         elem   : 'title',
         mods   : {
         size: 24
         },
         content: 'Platform'
         },
         {
         elem   : 'txt',
         content: [
         {
         tag    : 'p',
         content: 'In between coaching sessions you are engaged with your coach via our online journaling platform – JournalEngine™. JournalEngine™ changes the landscape of coaching by keeping you intimately connected to your coach in between coaching sessions, and also keeps you deeply engaged in the implementation of the concepts and principles learned throughout your coaching program.'
         },
         {
         tag    : 'p',
         content: 'JournalEngine™ is the gymnasium for your mind.  This platform will enable you to keep working on your Frame of Mind long after your coaching process is complete.'
         },
         {
         tag  : 'img',
         attrs: {
         src  : 'http://www.frameofmindcoaching.com/wp-content/uploads/2015/02/JE-logo-new.png',
         style: 'width: 215px; height: 44px;'
         }
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'cols',
         mix    : [
         {
         block: 'col-lg-6 col-sm-6 col-xs-12'
         },
         ],
         content: [
         {
         block  : 'box',
         mods   : {
         type    : 'image',
         location: 'top'
         },
         content: [
         {
         elem   : 'image-wrap',
         content: [
         {
         elem : 'image',
         tag  : 'img',
         mods : {
         size: 'big'
         },
         attrs: {
         src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/Plant-300x199.jpg'
         }
         },
         {
         block: 'icon',
         tag  : 'i',
         mix  : [
         {
         block: 'box',
         elem : 'icon',
         mods : {
         type: 'dots'
         }
         }
         ],
         mods : {
         type: 'dots'
         }
         }
         ]
         },
         {
         elem   : 'title',
         mods   : {
         size: 24
         },
         content: 'Focus'
         },
         {
         elem   : 'txt',
         content: [
         {
         tag    : 'p',
         content: 'Very simply, Frame of Mind Coaching is laser-focused on your mindset.'
         },
         {
         tag    : 'p',
         content: 'We know that the one thing getting in your way is YOU.'
         },
         {
         tag    : 'p',
         content: 'Your thinking, your values, your beliefs, your experiences and your perspectives all come together to form your current results. By honing in on your thinking, epic transformation takes place in a very short period of time. The results ripple across every aspect of your life, creating colossal changes from relationships, to health, to revenue.'
         },
         {
         tag    : 'p',
         content: 'The most dramatic and tangible change is that our clients are overwhelmingly happier as a result of coaching.'
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         elem   : 'width_100',
         content: [
         {
         block  : 'btn-wrap',
         mods   : {
         type: 'big'
         },
         content: [
         {
         elem   : 'btn',
         tag    : 'a',
         mods   : {
         size: 'big'
         },
         content: 'Learn why Frame of Mind Coaching is right for you'
         },
         {
         elem   : 'arrow',
         mods   : {
         size: 'big'
         },
         content: [
         {
         block: 'icon',
         tag  : 'i',
         mix  : [
         {
         block: 'btn_learn',
         elem : 'icon',
         mods : {
         size: 'big'
         }
         }
         ],
         mods : {
         type: 'arrow-right'
         }
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'quote',
         content: [
         {
         elem   : 'container',
         mix    : [
         {
         block: 'container'
         }
         ],
         content: [
         {
         elem   : 'author-photo',
         content: [
         {
         elem : 'photo',
         tag  : 'img',
         attrs: {
         src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2015/01/JO.jpg'
         }
         }
         ]
         },
         {
         elem   : 'txt',
         content: [
         {
         elem   : 'body',
         content: 'It is very easy to write a testimonial right after a course ends and while you’re feeling good about what you have learned, journaled about, and discovered about yourself. But, a true testimonial comes weeks or months later when what you have learned becomes a conscious reflection, more than you eve... '
         },
         {
         elem   : 'author',
         content: '- Jeanne D’Ottavi'
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'section',
         content: [
         {
         elem   : 'container',
         mix    : [
         {
         block: 'container'
         }
         ],
         content: [
         {
         elem   : 'title',
         content: 'Our Team'
         },
         {
         elem   : 'txt',
         mix    : [
         {
         block: 'narrow-160'
         },
         {
         block: 'text',
         elem : 'center'
         }
         ],
         content: 'Each and every member of the FOM Coaching team has started by going through our 1-1 coaching program as a client. The best way to describe them is through the core values which we commit to living and breathing on a daily basis.'
         },
         {
         block  : 'row',
         mix    : [
         {
         block: 'section',
         elem : 'box'
         }
         ],
         content: [
         {
         block  : 'cols',
         mix    : [
         {
         block: 'col-lg-6 col-md-6 col-sm-12'
         },
         ],
         content: [
         {
         elem : 'img-responsive',
         tag  : 'img',
         mix  : [
         {
         block: 'section',
         elem : 'centered'
         }
         ],
         attrs: {
         src: 'http://www.frameofmindcoaching.com/wp-content/uploads/2014/12/our_team.jpg'
         }
         }
         ]
         },
         {
         block  : 'cols',
         mix    : [
         {
         block: 'col-lg-6 col-md-6 col-sm-12'
         },
         ],
         content: [
         {
         elem   : 'title',
         mix    : [
         {
         block: 'section',
         elem : 'title',
         mods : {
         size: 24
         }
         },
         {
         block: 'hide-on-small'
         },
         {
         block: 'text',
         elem : 'left'
         }
         ],
         content: 'Frame of Mind Coaching\'s Core Values'
         },
         {
         elem   : 'txt',
         mods   : {
         size : 'small',
         style: 'italic'
         },
         content: [
         {
         elem   : 'red',
         content: 'GENEROSITY ',
         tag    : 'span'
         },
         '- Giving whatever we can to our clients exactly when they need it the most.'
         ]
         },
         {
         elem   : 'txt',
         mods   : {
         size : 'small',
         style: 'italic'
         },
         content: [
         {
         elem   : 'red',
         content: 'IMPACT THROUGH BOLD LEADERSHIP ',
         tag    : 'span'
         },
         '- Leading by example AND coaching leaders to have a profound impact on every community they touch.'
         ]
         },
         {
         elem   : 'txt',
         mods   : {
         size : 'small',
         style: 'italic'
         },
         content: [
         {
         elem   : 'red',
         content: 'INTIMACY ',
         tag    : 'span'
         },
         '- Building an unprecedented level of trust with our clients.'
         ]
         },
         {
         elem   : 'txt',
         mods   : {
         size : 'small',
         style: 'italic'
         },
         content: [
         {
         elem   : 'red',
         content: 'INNOVATION ',
         tag    : 'span'
         },
         '- Developing and delivering the most leading edge and powerful approaches to coaching.'
         ]
         },
         {
         elem   : 'txt',
         mods   : {
         size : 'small',
         style: 'italic'
         },
         content: [
         {
         elem   : 'red',
         content: 'PERSONAL DEVELOPMENT ',
         tag    : 'span'
         },
         '- As FOM Coaches, we are committed to our own personal and professional development as we simultaneously take a stand for the personal development of our clients.'
         ]
         },
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'section',
         content: [
         {
         elem   : 'container',
         mix    : [
         {
         block: 'container'
         },
         {
         block: 'text',
         elem : 'center'
         }
         ],
         content: [
         {
         elem   : 'title',
         content: 'Get a Taste of our Frame of Mind Coaching experience'
         },
         {
         elem   : 'width_100',
         mix    : [
         {
         block: 'common',
         elem : 'padding-bottom-40'
         }
         ],
         content: [
         {
         block  : 'btn-wrap',
         mods   : {
         type: 'big'
         },
         content: [
         {
         elem   : 'btn',
         tag    : 'a',
         mods   : {
         size: 'big'
         },
         content: 'Start your personalized Assessment'
         },
         {
         elem   : 'arrow',
         mods   : {
         size: 'big'
         },
         content: [
         {
         block: 'icon',
         tag  : 'i',
         mix  : [
         {
         block: 'btn_learn',
         elem : 'icon',
         mods : {
         size: 'big'
         }
         }
         ],
         mods : {
         type: 'arrow-right'
         }
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'footer',
         content: [
         {
         elem   : 'container',
         mix    : [
         {
         block: 'container'
         }
         ],
         content: [
         {
         elem   : 'top',
         content: [
         {
         block  : 'row',
         content: [
         {
         elem   : 'cols',
         mix    : [
         {
         block: 'col-lg-2 col-md-3 col-sm-3'
         },
         ],
         content: [
         {
         elem   : 'title',
         mix    : [
         {
         block: 'footer',
         elem : 'title'
         }
         ],
         content: 'Services'
         },
         {
         block  : 'footer-menu',
         mix    : [
         {
         block: 'menu'
         }
         ],
         content: [
         {
         elem   : 'item',
         block  : 'menu',
         mix    : [
         {
         block: 'footer-menu',
         elem : 'item'
         }
         ],
         content: [
         {
         tag    : 'a',
         attrs  : {
         href: '#'
         },
         content: 'Coaching'
         }
         ]
         },
         {
         elem   : 'item',
         block  : 'menu',
         mix    : [
         {
         block: 'footer-menu',
         elem : 'item'
         }
         ],
         content: [
         {
         tag    : 'a',
         attrs  : {
         href: '#'
         },
         content: 'Certification'
         }
         ]
         }
         ]
         }
         ]
         },
         {
         elem   : 'cols',
         mix    : [
         {
         block: 'col-lg-2 col-md-3 col-sm-3'
         },
         ],
         content: [
         {
         elem   : 'title',
         mix    : [
         {
         block: 'footer',
         elem : 'title'
         }
         ],
         content: 'About Us'
         },
         {
         block  : 'footer-menu',
         mix    : [
         {
         block: 'menu'
         }
         ],
         content: [
         {
         elem   : 'item',
         block  : 'menu',
         mix    : [
         {
         block: 'footer-menu',
         elem : 'item'
         }
         ],
         content: [
         {
         tag    : 'a',
         attrs  : {
         href: '#'
         },
         content: 'Meet Our Team'
         }
         ]
         },
         {
         elem   : 'item',
         block  : 'menu',
         mix    : [
         {
         block: 'footer-menu',
         elem : 'item'
         }
         ],
         content: [
         {
         tag    : 'a',
         attrs  : {
         href: '#'
         },
         content: 'Testimonials'
         }
         ]
         },
         {
         elem   : 'item',
         block  : 'menu',
         mix    : [
         {
         block: 'footer-menu',
         elem : 'item'
         }
         ],
         content: [
         {
         tag    : 'a',
         attrs  : {
         href: '#'
         },
         content: 'Privacy'
         }
         ]
         }
         ]
         }
         ]
         },
         {
         elem   : 'cols',
         mix    : [
         {
         block: 'col-lg-2 col-md-3 col-sm-3'
         },
         ],
         content: [
         {
         elem   : 'title',
         mix    : [
         {
         block: 'footer',
         elem : 'title'
         }
         ],
         content: 'News'
         },
         {
         block  : 'footer-menu',
         mix    : [
         {
         block: 'menu'
         }
         ],
         content: [
         {
         elem   : 'item',
         block  : 'menu',
         mix    : [
         {
         block: 'footer-menu',
         elem : 'item'
         }
         ],
         content: [
         {
         tag    : 'a',
         attrs  : {
         href: '#'
         },
         content: 'Media'
         }
         ]
         },
         {
         elem   : 'item',
         block  : 'menu',
         mix    : [
         {
         block: 'footer-menu',
         elem : 'item'
         }
         ],
         content: [
         {
         tag    : 'a',
         attrs  : {
         href: '#'
         },
         content: 'News & Views'
         }
         ]
         }
         ]
         }
         ]
         },
         {
         elem   : 'cols',
         mix    : [
         {
         block: 'col-lg-2 col-md-3 col-sm-3'
         },
         ],
         content: [
         {
         elem   : 'title',
         mix    : [
         {
         block: 'footer',
         elem : 'title'
         }
         ],
         content: 'Connect'
         },
         {
         block  : 'footer-menu',
         mix    : [
         {
         block: 'menu'
         }
         ],
         content: [
         {
         elem   : 'item',
         block  : 'menu',
         mix    : [
         {
         block: 'footer-menu',
         elem : 'item'
         }
         ],
         content: [
         {
         tag    : 'a',
         attrs  : {
         href: '#'
         },
         content: '416-747-6900'
         }
         ]
         },
         {
         elem   : 'item',
         block  : 'menu',
         mix    : [
         {
         block: 'footer-menu',
         elem : 'item'
         }
         ],
         content: [
         {
         tag    : 'a',
         attrs  : {
         href: '#'
         },
         content: 'contact'
         }
         ]
         }
         ]
         }
         ]
         },
         {
         elem   : 'cols',
         mix    : [
         {
         block: 'col-lg-4 col-md-6 col-lg-offset-0 col-md-offset-3 col-sm-offset-3 col-sm-9'
         },
         ],
         content: [
         {
         elem   : 'title',
         mix    : [
         {
         block: 'footer',
         elem : 'title'
         }
         ],
         content: 'Sign up for our newsletter'
         },
         {
         block  : 'form',
         mix    : [
         {
         block: 'footer-form'
         }
         ],
         mods   : {
         type: 'envelope'
         },
         content: [
         {
         block: 'icon',
         mix  : [
         {
         block: 'form',
         elem : 'icon'
         },
         {
         block: 'footer-form',
         elem : 'icon'
         },
         {
         block: 'footer-form-type',
         elem : 'envelope'
         }
         ],
         mods : {
         type: 'envelope'
         }
         },
         {
         elem : 'input',
         tag  : 'input',
         mods : {
         type: 'txt'
         },
         mix  : [
         {
         block: 'footer-form',
         elem : 'input'
         },
         {
         block: 'form-icon',
         elem : 'input'
         }
         ],
         attrs: {
         placeholder: 'Enter your email Address'
         }
         },
         {
         tag    : 'a',
         block  : 'btn',
         mods   : {
         color: 'red'
         },
         mix    : [
         {
         block: 'footer-form',
         elem : 'btn'
         }
         ],
         content: 'Sign Up'
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         elem   : 'bottom',
         mix    : [
         {
         block: 'text',
         elem : 'center'
         }
         ],
         content: [
         {
         elem   : 'social',
         content: [
         {
         elem   : 'item',
         content: [
         {
         block: 'icon',
         mix  : [
         {
         block: 'footer-social',
         elem : 'icon'
         }
         ],
         mods : {
         type: 'tw'
         }
         }
         ]
         },
         {
         elem   : 'item',
         content: [
         {
         block: 'icon',
         mix  : [
         {
         block: 'footer-social',
         elem : 'icon'
         }
         ],
         mods : {
         type: 'fb'
         }
         }
         ]
         },
         {
         elem   : 'item',
         content: [
         {
         block: 'icon',
         mix  : [
         {
         block: 'footer-social',
         elem : 'icon'
         }
         ],
         mods : {
         type: 'in'
         }
         }
         ]
         },
         {
         elem   : 'item',
         content: [
         {
         block: 'icon',
         mix  : [
         {
         block: 'footer-social',
         elem : 'icon'
         }
         ],
         mods : {
         type: 'you-tube'
         }
         }
         ]
         }
         ]
         },
         {
         elem   : 'copy',
         content: [
         {
         elem   : 'arial',
         tag    : 'span',
         content: '&#169; '
         },
         'Frame of Mind Coaching 2015'
         ]
         }
         ]
         }
         ]
         }
         ]
         },
         {
         block  : 'modal',
         attrs  : {
         id               : 'modalThanks',
         tabindex         : '-1',
         role             : 'dialog',
         'aria-labelledby': 'myModalLabel',
         'aria-hidden'    : 'true'
         },
         mix    : [
         {
         block: 'fade'
         }
         ],
         content: [
         {
         elem   : 'header',
         content: [
         {
         elem   : 'close',
         tag    : 'button',
         attrs  : {
         'data-dismiss': 'modal'
         },
         content: [
         {
         tag    : 'span',
         content: '&times;'
         },
         {
         block  : 'sr-only',
         content: 'Close'
         }
         ]
         }
         ]
         },
         {
         elem   : 'body',
         content: [
         {
         elem   : 'section',
         content: [
         {
         block  : 'form',
         content: [
         {
         elem   : 'container',
         content: [
         {
         block  : 'row',
         content: [
         {
         block  : 'cols',
         mix    : [
         {
         block: 'col-lg-10 col-md-10 col-sm-12 col-lg-offset-1 col-md-offset-1'
         }
         ],
         content: [
         {
         elem   : 'title',
         block  : 'modal',
         content: 'Thank you for signing up'
         },
         {
         elem   : 'text',
         block  : 'modal',
         mix    : [
         {
         block: 'text',
         elem : 'center'
         }, {
         block: 'common',
         elem : 'padding-bottom-20'
         }
         ],
         content: 'Click below to begin your journey!'
         },
         {
         elem   : 'form-wrap',
         block  : 'modal',
         content: [
         {
         block  : 'form',
         content: [
         {
         elem   : 'control-group',
         content: [
         {
         block  : 'btn',
         mods   : {
         color: 'red',
         type : 'submit'
         },
         content: 'Start your personalized Assessment'
         },
         {
         block  : 'btn',
         mods   : {
         color: 'red'
         },
         attrs  : {
         'data-dismiss': 'modal'
         },
         content: 'Cancel'
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }
         ]
         }*/
    ]
})
