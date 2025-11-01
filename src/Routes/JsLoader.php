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
                    'path' => 'Tualo.js.lazy',
                    'url' =>  './tualojs'
                ]
            ]);
            App::result('success', true);
        }, ['get'], false, [], self::scope());


        BasicRoute::add('/tualojs-requires', function ($matches) {
            $db = App::get('session')->getDB();
            App::contenttype('application/json');
            App::result('data', [
                [
                    'type' => 'Tualo.js.lazy.Testfilter'
                ]
            ]);
            App::result('success', true);
        }, ['get'], false, [], self::scope());

        BasicRoute::add('/tualojs/(?P<file>[\w.\/\-]+).js', function ($matches) {
            RouteSecurityHelper::serveSecureStaticFile(
                $matches['file'] . '.js',
                dirname(__DIR__, 1) . '/js/lazy/',
                ['js'],
                ['js' => ['application/javascript']]
            );
        }, ['get'], false, [], self::scope());
    }
}
