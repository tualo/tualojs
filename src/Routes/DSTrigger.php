<?php

namespace Tualo\Office\TualoJS\Routes;

use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\Route;
use Tualo\Office\Basic\IRoute;
use Tualo\Office\DS\Routes\DS;


class DSTrigger extends \Tualo\Office\Basic\RouteWrapper
{
    public static function register()
    {
        Route::add(
            '/tualocombo/dstrigger',
            function () {

                $db = TualoApplication::get('session')->getDB();
                $session = TualoApplication::get('session');
                try {

                    $data  = [];
                    TualoApplication::result('data', $data);
                    TualoApplication::result('total', count($data));
                    TualoApplication::result('success', true);
                } catch (\Exception $e) {
                    TualoApplication::result('msg', $e->getMessage());
                }
                TualoApplication::contenttype('application/json');
            },
            array('get', 'post'),
            true,
            [
                'errorOnUnexpected' => true,
                'errorOnInvalid' => true,
                'fields' => DS::DefaultExpectedFields
            ]
        );
    }
}
