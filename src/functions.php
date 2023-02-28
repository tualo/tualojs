<?php
use Tualo\Office\ExtJSCompiler\Registry;

Registry::add(__DIR__.'/js/');

if (class_exists("Tualo\Office\TualoJS\Middlewares\TualoJSMiddleware")){ }
if (class_exists("Tualo\Office\TualoJS\Routes\TualoJSRoute")){ }

