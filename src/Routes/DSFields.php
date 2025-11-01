<?php

namespace Tualo\Office\TualoJS\Routes;

use Tualo\Office\Basic\TualoApplication;
use Tualo\Office\Basic\Route;
use Tualo\Office\Basic\IRoute;
use Tualo\Office\DS\Routes\DS;


class DSFields extends \Tualo\Office\Basic\RouteWrapper
{
    public static function scope(): string
    {
        return 'tualojs.dsfields';
    }

    public static function register()
    {
        Route::add(
            '/tualocombo/dsfields',
            function () {

                $db = TualoApplication::get('session')->getDB();
                $session = TualoApplication::get('session');
                try {

                    $sql = 'select column_name id  from ds_column  ';
                    if (isset($_REQUEST['tablename'])) {
                        $sql .= ' where  table_name = {tablename} ';
                    }
                    $data  = $db->direct($sql, $_REQUEST);
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
            ],
            self::scope()
        );
    }
}
