<?php

namespace Tualo\Office\TualoJS\Routes;

use Tualo\Office\Basic\TualoApplication as App;
use Tualo\Office\Basic\Route as BasicRoute;
use Tualo\Office\Basic\RouteSecurityHelper;
use Tualo\Office\Basic\IRoute;

class JsLoader extends \Tualo\Office\Basic\RouteWrapper
{
    public static function scope(): string
    {
        return 'tualojs.jsloader';
    }
    public static function register()
    {

        BasicRoute::add('/tualojs-loaders', function ($matches) {
            $db = App::get('session')->getDB();
            App::contenttype('application/json');

            App::result('data', [
                [
                    'path' => 'Tualo.js',
                    'url' =>  './tualojs'
                ]
            ]);
            App::result('success', true);
        }, ['get'], false, [], self::scope());


        BasicRoute::add('/tualojs-requires', function ($matches) {
            $db = App::get('session')->getDB();
            App::contenttype('application/json');
            $list = $db->direct('select 
                concat("Tualo.js.", replace( concat(filepath,"/",filename),"/",".") ) type
            from tualojs where is_required = 1', []);

            App::result('data', $list);
            App::result('success', true);
        }, ['get'], false, [], self::scope());

        BasicRoute::add('/tualojs/(?P<file>[\w.\/\-]+).js', function ($matches) {

            $db = App::get('session')->getDB();
            App::contenttype('application/javascript');

            $content = $db->singleValue('
            select 
                replace( concat(filepath,"/",filename),"/",".") class,
                concat(filepath,"/",filename) selector,
                tualojs.*
            from tualojs
            having selector = {file} limit 1', $matches, 'content');
            App::body($content);
            /*
            RouteSecurityHelper::serveSecureStaticFile(
                $matches['file'] . '.js',
                dirname(__DIR__, 1) . '/js/',
                ['js'],
                ['js' => 'application/javascript']
            );*/
        }, ['get'], false, [], self::scope());
    }
}
