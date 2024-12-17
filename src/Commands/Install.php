<?php
namespace Tualo\Office\TualoJS\Commandline;
use Tualo\Office\Basic\ICommandline;
use Tualo\Office\Basic\CommandLineInstallSQL;

class Install extends CommandLineInstallSQL  implements ICommandline{
    public static function getDir():string {   return dirname(__DIR__,1); }
    public static $shortName  = 'tualojs';
    public static $files = [
        'custom_types' => 'setup custom_types ',
        'farben' => 'setup farben ',
        'farben.ds' => 'setup farben.ds ',
        'ptypes' => 'setup ptypes ',

        'types/tualo_ds_filter_textfield' => 'setup tualo_ds_filter_textfield ',

    ];
    
}
