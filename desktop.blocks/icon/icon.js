/**
 * Created by Elmar <a.k.a. Ramires> Abdurayimov on 5/25/15 9:24 PM
 * @copyright (C)Copyright 2015 e.abdurayimov@gmail.com
 */

modules.define('icon', [ 'i-bem__dom', 'jquery' ], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js'            : {
                'inited': function () {
                    this.bindTo('click', function () {
                        this.setMod('scroll2section', 1);
                    });
                }
            },
            'scroll2section': function (modName, modVal, oldModVal) {
                var $section = $('.section-' + modVal);

                if (!$section.length) {
                    console.log($('[data-section="' + modVal + '"]'));
                    return false;
                }

                $('html, body').animate({
                    scrollTop: $section.offset().top - 30
                }, 750);
            }
        }
    }));

});
