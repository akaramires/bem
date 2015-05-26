/**
 * Created by Elmar <a.k.a. Ramires> Abdurayimov on 5/25/15 9:24 PM
 * @copyright (C)Copyright 2015 e.abdurayimov@gmail.com
 */

modules.define('button', [ 'i-bem__dom', 'jquery' ], function (provide, BEMDOM, $) {

    provide(BEMDOM.decl(this.name, {
        onSetMod: {
            'js': {
                'inited': function () {
                    this.bindTo('click', function () {

                        if (this.domElem.hasClass('menu-button')) {
                            var navbar = $('.header__navbar');

                            navbar.toggleClass('on', 1000, "easeOutSine");
                        }

                    });
                }
            }
        }
    }));

});
