define([
    'jquery',
    'mage/url',
    'jquery/ui',
    'mage/mage'
], function ($, url) {
    'use strict';

    $.widget('oakma_twovikki.contactForm', {
        options: {

        },

        /** @inheritdoc */
        _create: function () {
            var dataForm = $(this.element);

            dataForm.mage('validation', {
                ignore: ':hidden'
            }).find('input:text').attr('autocomplete', 'off');

            $(this.options.submitButton).on('click', $.proxy(function () {
                if (dataForm.valid()){
                    var params = {};

                    dataForm.find('input, select, textarea').each(function(idx, el) {
                        params[$(el).attr('name')] = $(el).val();
                    });

                    $.ajax({
                        method: "POST",
                        url: url.build('twovikki/ajax/contactFormPost'),
                        data: params,
                        dataType: "json"
                    }).done(function( msg ) {

                    });

                    return false;
                }
            }, this));

            /*this.couponCode = $(this.options.couponCodeSelector);
            this.removeCoupon = $(this.options.removeCouponSelector);

            var dataForm = $('#form-validate');


            dataForm.mage('validation', {
                ignore: ignore ? ':hidden:not(' + ignore + ')' : ':hidden'
            }).find('input:text').attr('autocomplete', 'off');

            $(this.options.applyButton).on('click', $.proxy(function () {
                this.couponCode.attr('data-validate', '{required:true}');
                this.removeCoupon.attr('value', '0');
                $(this.element).validation().submit();
            }, this));

            $(this.options.cancelButton).on('click', $.proxy(function () {
                this.couponCode.removeAttr('data-validate');
                this.removeCoupon.attr('value', '1');
                this.element.submit();
            }, this));*/

            console.log('alert test');
        }
    });

    return $.oakma_twovikki.contactForm;
});
