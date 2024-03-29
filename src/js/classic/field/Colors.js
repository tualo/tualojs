Ext.define('Ext.tualo.form.field.Colors', {
  alias: ['widget.tualocolors'],
  xtype: 'tualocolors',
  extend: 'Ext.form.field.ComboBox',
  constructor: function(config) {

    this.store = Ext.create('Ext.data.ArrayStore', {
      data: [
        ['rgb(176,23,31)','indian red'],
        ['rgb(220,20,60)','crimson'],
        ['rgb(255,182,193)','lightpink'],
        ['rgb(255,174,185)','lightpink 1'],
        ['rgb(238,162,173)','lightpink 2'],
        ['rgb(205,140,149)','lightpink 3'],
        ['rgb(139,95,101)','lightpink 4'],
        ['rgb(255,192,203)','pink'],
        ['rgb(255,181,197)','pink 1'],
        ['rgb(238,169,184)','pink 2'],
        ['rgb(205,145,158)','pink 3'],
        ['rgb(139,99,108)','pink 4'],
        ['rgb(219,112,147)','palevioletred'],
        ['rgb(255,130,171)','palevioletred 1'],
        ['rgb(238,121,159)','palevioletred 2'],
        ['rgb(205,104,137)','palevioletred 3'],
        ['rgb(139,71,93)','palevioletred 4'],
        ['rgb(255,240,245)','lavenderblush 1 (lavenderblush)'],
        ['rgb(238,224,229)','lavenderblush 2'],
        ['rgb(205,193,197)','lavenderblush 3'],
        ['rgb(139,131,134)','lavenderblush 4'],
        ['rgb(255,62,150)','violetred 1'],
        ['rgb(238,58,140)','violetred 2'],
        ['rgb(205,50,120)','violetred 3'],
        ['rgb(139,34,82)','violetred 4'],
        ['rgb(255,105,180)','hotpink'],
        ['rgb(255,110,180)','hotpink 1'],
        ['rgb(238,106,167)','hotpink 2'],
        ['rgb(205,96,144)','hotpink 3'],
        ['rgb(139,58,98)','hotpink 4'],
        ['rgb(135,38,87)','raspberry'],
        ['rgb(255,20,147)','deeppink 1 (deeppink)'],
        ['rgb(238,18,137)','deeppink 2'],
        ['rgb(205,16,118)','deeppink 3'],
        ['rgb(139,10,80)','deeppink 4'],
        ['rgb(255,52,179)','maroon 1'],
        ['rgb(238,48,167)','maroon 2'],
        ['rgb(205,41,144)','maroon 3'],
        ['rgb(139,28,98)','maroon 4'],
        ['rgb(199,21,133)','mediumvioletred'],
        ['rgb(208,32,144)','violetred'],
        ['rgb(218,112,214)','orchid'],
        ['rgb(255,131,250)','orchid 1'],
        ['rgb(238,122,233)','orchid 2'],
        ['rgb(205,105,201)','orchid 3'],
        ['rgb(139,71,137)','orchid 4'],
        ['rgb(216,191,216)','thistle'],
        ['rgb(255,225,255)','thistle 1'],
        ['rgb(238,210,238)','thistle 2'],
        ['rgb(205,181,205)','thistle 3'],
        ['rgb(139,123,139)','thistle 4'],
        ['rgb(255,187,255)','plum 1'],
        ['rgb(238,174,238)','plum 2'],
        ['rgb(205,150,205)','plum 3'],
        ['rgb(139,102,139)','plum 4'],
        ['rgb(221,160,221)','plum'],
        ['rgb(238,130,238)','violet'],
        ['rgb(255,0,255)','magenta (fuchsia*)'],
        ['rgb(238,0,238)','magenta 2'],
        ['rgb(205,0,205)','magenta 3'],
        ['rgb(139,0,139)','magenta 4 (darkmagenta)'],
        ['rgb(128,0,128)','purple*'],
        ['rgb(186,85,211)','mediumorchid'],
        ['rgb(224,102,255)','mediumorchid 1'],
        ['rgb(209,95,238)','mediumorchid 2'],
        ['rgb(180,82,205)','mediumorchid 3'],
        ['rgb(122,55,139)','mediumorchid 4'],
        ['rgb(148,0,211)','darkviolet'],
        ['rgb(153,50,204)','darkorchid'],
        ['rgb(191,62,255)','darkorchid 1'],
        ['rgb(178,58,238)','darkorchid 2'],
        ['rgb(154,50,205)','darkorchid 3'],
        ['rgb(104,34,139)','darkorchid 4'],
        ['rgb(75,0,130)','indigo'],
        ['rgb(138,43,226)','blueviolet'],
        ['rgb(155,48,255)','purple 1'],
        ['rgb(145,44,238)','purple 2'],
        ['rgb(125,38,205)','purple 3'],
        ['rgb(85,26,139)','purple 4'],
        ['rgb(147,112,219)','mediumpurple'],
        ['rgb(171,130,255)','mediumpurple 1'],
        ['rgb(159,121,238)','mediumpurple 2'],
        ['rgb(137,104,205)','mediumpurple 3'],
        ['rgb(93,71,139)','mediumpurple 4'],
        ['rgb(72,61,139)','darkslateblue'],
        ['rgb(132,112,255)','lightslateblue'],
        ['rgb(123,104,238)','mediumslateblue'],
        ['rgb(106,90,205)','slateblue'],
        ['rgb(131,111,255)','slateblue 1'],
        ['rgb(122,103,238)','slateblue 2'],
        ['rgb(105,89,205)','slateblue 3'],
        ['rgb(71,60,139)','slateblue 4'],
        ['rgb(248,248,255)','ghostwhite'],
        ['rgb(230,230,250)','lavender'],
        ['rgb(0,0,255)','blue*'],
        ['rgb(0,0,238)','blue 2'],
        ['rgb(0,0,205)','blue 3 (mediumblue)'],
        ['rgb(0,0,139)','blue 4 (darkblue)'],
        ['rgb(0,0,128)','navy*'],
        ['rgb(25,25,112)','midnightblue'],
        ['rgb(61,89,171)','cobalt'],
        ['rgb(65,105,225)','royalblue'],
        ['rgb(72,118,255)','royalblue 1'],
        ['rgb(67,110,238)','royalblue 2'],
        ['rgb(58,95,205)','royalblue 3'],
        ['rgb(39,64,139)','royalblue 4'],
        ['rgb(100,149,237)','cornflowerblue'],
        ['rgb(176,196,222)','lightsteelblue'],
        ['rgb(202,225,255)','lightsteelblue 1'],
        ['rgb(188,210,238)','lightsteelblue 2'],
        ['rgb(162,181,205)','lightsteelblue 3'],
        ['rgb(110,123,139)','lightsteelblue 4'],
        ['rgb(119,136,153)','lightslategray'],
        ['rgb(112,128,144)','slategray'],
        ['rgb(198,226,255)','slategray 1'],
        ['rgb(185,211,238)','slategray 2'],
        ['rgb(159,182,205)','slategray 3'],
        ['rgb(108,123,139)','slategray 4'],
        ['rgb(30,144,255)','dodgerblue 1 (dodgerblue)'],
        ['rgb(28,134,238)','dodgerblue 2'],
        ['rgb(24,116,205)','dodgerblue 3'],
        ['rgb(16,78,139)','dodgerblue 4'],
        ['rgb(240,248,255)','aliceblue'],
        ['rgb(70,130,180)','steelblue'],
        ['rgb(99,184,255)','steelblue 1'],
        ['rgb(92,172,238)','steelblue 2'],
        ['rgb(79,148,205)','steelblue 3'],
        ['rgb(54,100,139)','steelblue 4'],
        ['rgb(135,206,250)','lightskyblue'],
        ['rgb(176,226,255)','lightskyblue 1'],
        ['rgb(164,211,238)','lightskyblue 2'],
        ['rgb(141,182,205)','lightskyblue 3'],
        ['rgb(96,123,139)','lightskyblue 4'],
        ['rgb(135,206,255)','skyblue 1'],
        ['rgb(126,192,238)','skyblue 2'],
        ['rgb(108,166,205)','skyblue 3'],
        ['rgb(74,112,139)','skyblue 4'],
        ['rgb(135,206,235)','skyblue'],
        ['rgb(0,191,255)','deepskyblue 1 (deepskyblue)'],
        ['rgb(0,178,238)','deepskyblue 2'],
        ['rgb(0,154,205)','deepskyblue 3'],
        ['rgb(0,104,139)','deepskyblue 4'],
        ['rgb(51,161,201)','peacock'],
        ['rgb(173,216,230)','lightblue'],
        ['rgb(191,239,255)','lightblue 1'],
        ['rgb(178,223,238)','lightblue 2'],
        ['rgb(154,192,205)','lightblue 3'],
        ['rgb(104,131,139)','lightblue 4'],
        ['rgb(176,224,230)','powderblue'],
        ['rgb(152,245,255)','cadetblue 1'],
        ['rgb(142,229,238)','cadetblue 2'],
        ['rgb(122,197,205)','cadetblue 3'],
        ['rgb(83,134,139)','cadetblue 4'],
        ['rgb(0,245,255)','turquoise 1'],
        ['rgb(0,229,238)','turquoise 2'],
        ['rgb(0,197,205)','turquoise 3'],
        ['rgb(0,134,139)','turquoise 4'],
        ['rgb(95,158,160)','cadetblue'],
        ['rgb(0,206,209)','darkturquoise'],
        ['rgb(240,255,255)','azure 1 (azure)'],
        ['rgb(224,238,238)','azure 2'],
        ['rgb(193,205,205)','azure 3'],
        ['rgb(131,139,139)','azure 4'],
        ['rgb(224,255,255)','lightcyan 1 (lightcyan)'],
        ['rgb(209,238,238)','lightcyan 2'],
        ['rgb(180,205,205)','lightcyan 3'],
        ['rgb(122,139,139)','lightcyan 4'],
        ['rgb(187,255,255)','paleturquoise 1'],
        ['rgb(174,238,238)','paleturquoise 2 (paleturquoise)'],
        ['rgb(150,205,205)','paleturquoise 3'],
        ['rgb(102,139,139)','paleturquoise 4'],
        ['rgb(47,79,79)','darkslategray'],
        ['rgb(151,255,255)','darkslategray 1'],
        ['rgb(141,238,238)','darkslategray 2'],
        ['rgb(121,205,205)','darkslategray 3'],
        ['rgb(82,139,139)','darkslategray 4'],
        ['rgb(0,255,255)','cyan / aqua*'],
        ['rgb(0,238,238)','cyan 2'],
        ['rgb(0,205,205)','cyan 3'],
        ['rgb(0,139,139)','cyan 4 (darkcyan)'],
        ['rgb(0,128,128)','teal*'],
        ['rgb(72,209,204)','mediumturquoise'],
        ['rgb(32,178,170)','lightseagreen'],
        ['rgb(3,168,158)','manganeseblue'],
        ['rgb(64,224,208)','turquoise'],
        ['rgb(128,138,135)','coldgrey'],
        ['rgb(0,199,140)','turquoiseblue'],
        ['rgb(127,255,212)','aquamarine 1 (aquamarine)'],
        ['rgb(118,238,198)','aquamarine 2'],
        ['rgb(102,205,170)','aquamarine 3 (mediumaquamarine)'],
        ['rgb(69,139,116)','aquamarine 4'],
        ['rgb(0,250,154)','mediumspringgreen'],
        ['rgb(245,255,250)','mintcream'],
        ['rgb(0,255,127)','springgreen'],
        ['rgb(0,238,118)','springgreen 1'],
        ['rgb(0,205,102)','springgreen 2'],
        ['rgb(0,139,69)','springgreen 3'],
        ['rgb(60,179,113)','mediumseagreen'],
        ['rgb(84,255,159)','seagreen 1'],
        ['rgb(78,238,148)','seagreen 2'],
        ['rgb(67,205,128)','seagreen 3'],
        ['rgb(46,139,87)','seagreen 4 (seagreen)'],
        ['rgb(0,201,87)','emeraldgreen'],
        ['rgb(189,252,201)','mint'],
        ['rgb(61,145,64)','cobaltgreen'],
        ['rgb(240,255,240)','honeydew 1 (honeydew)'],
        ['rgb(224,238,224)','honeydew 2'],
        ['rgb(193,205,193)','honeydew 3'],
        ['rgb(131,139,131)','honeydew 4'],
        ['rgb(143,188,143)','darkseagreen'],
        ['rgb(193,255,193)','darkseagreen 1'],
        ['rgb(180,238,180)','darkseagreen 2'],
        ['rgb(155,205,155)','darkseagreen 3'],
        ['rgb(105,139,105)','darkseagreen 4'],
        ['rgb(152,251,152)','palegreen'],
        ['rgb(154,255,154)','palegreen 1'],
        ['rgb(144,238,144)','palegreen 2 (lightgreen)'],
        ['rgb(124,205,124)','palegreen 3'],
        ['rgb(84,139,84)','palegreen 4'],
        ['rgb(50,205,50)','limegreen'],
        ['rgb(34,139,34)','forestgreen'],
        ['rgb(0,255,0)','green 1 (lime*)'],
        ['rgb(0,238,0)','green 2'],
        ['rgb(0,205,0)','green 3'],
        ['rgb(0,139,0)','green 4'],
        ['rgb(0,128,0)','green*'],
        ['rgb(0,100,0)','darkgreen'],
        ['rgb(48,128,20)','sapgreen'],
        ['rgb(124,252,0)','lawngreen'],
        ['rgb(127,255,0)','chartreuse 1 (chartreuse)'],
        ['rgb(118,238,0)','chartreuse 2'],
        ['rgb(102,205,0)','chartreuse 3'],
        ['rgb(69,139,0)','chartreuse 4'],
        ['rgb(173,255,47)','greenyellow'],
        ['rgb(202,255,112)','darkolivegreen 1'],
        ['rgb(188,238,104)','darkolivegreen 2'],
        ['rgb(162,205,90)','darkolivegreen 3'],
        ['rgb(110,139,61)','darkolivegreen 4'],
        ['rgb(85,107,47)','darkolivegreen'],
        ['rgb(107,142,35)','olivedrab'],
        ['rgb(192,255,62)','olivedrab 1'],
        ['rgb(179,238,58)','olivedrab 2'],
        ['rgb(154,205,50)','olivedrab 3 (yellowgreen)'],
        ['rgb(105,139,34)','olivedrab 4'],
        ['rgb(255,255,240)','ivory 1 (ivory)'],
        ['rgb(238,238,224)','ivory 2'],
        ['rgb(205,205,193)','ivory 3'],
        ['rgb(139,139,131)','ivory 4'],
        ['rgb(245,245,220)','beige'],
        ['rgb(255,255,224)','lightyellow 1 (lightyellow)'],
        ['rgb(238,238,209)','lightyellow 2'],
        ['rgb(205,205,180)','lightyellow 3'],
        ['rgb(139,139,122)','lightyellow 4'],
        ['rgb(250,250,210)','lightgoldenrodyellow'],
        ['rgb(255,255,0)','yellow 1 (yellow*)'],
        ['rgb(238,238,0)','yellow 2'],
        ['rgb(205,205,0)','yellow 3'],
        ['rgb(139,139,0)','yellow 4'],
        ['rgb(128,128,105)','warmgrey'],
        ['rgb(128,128,0)','olive*'],
        ['rgb(189,183,107)','darkkhaki'],
        ['rgb(255,246,143)','khaki 1'],
        ['rgb(238,230,133)','khaki 2'],
        ['rgb(205,198,115)','khaki 3'],
        ['rgb(139,134,78)','khaki 4'],
        ['rgb(240,230,140)','khaki'],
        ['rgb(238,232,170)','palegoldenrod'],
        ['rgb(255,250,205)','lemonchiffon 1 (lemonchiffon)'],
        ['rgb(238,233,191)','lemonchiffon 2'],
        ['rgb(205,201,165)','lemonchiffon 3'],
        ['rgb(139,137,112)','lemonchiffon 4'],
        ['rgb(255,236,139)','lightgoldenrod 1'],
        ['rgb(238,220,130)','lightgoldenrod 2'],
        ['rgb(205,190,112)','lightgoldenrod 3'],
        ['rgb(139,129,76)','lightgoldenrod 4'],
        ['rgb(227,207,87)','banana'],
        ['rgb(255,215,0)','gold 1 (gold)'],
        ['rgb(238,201,0)','gold 2'],
        ['rgb(205,173,0)','gold 3'],
        ['rgb(139,117,0)','gold 4'],
        ['rgb(255,248,220)','cornsilk 1 (cornsilk)'],
        ['rgb(238,232,205)','cornsilk 2'],
        ['rgb(205,200,177)','cornsilk 3'],
        ['rgb(139,136,120)','cornsilk 4'],
        ['rgb(218,165,32)','goldenrod'],
        ['rgb(255,193,37)','goldenrod 1'],
        ['rgb(238,180,34)','goldenrod 2'],
        ['rgb(205,155,29)','goldenrod 3'],
        ['rgb(139,105,20)','goldenrod 4'],
        ['rgb(184,134,11)','darkgoldenrod'],
        ['rgb(255,185,15)','darkgoldenrod 1'],
        ['rgb(238,173,14)','darkgoldenrod 2'],
        ['rgb(205,149,12)','darkgoldenrod 3'],
        ['rgb(139,101,8)','darkgoldenrod 4'],
        ['rgb(255,165,0)','orange 1 (orange)'],
        ['rgb(238,154,0)','orange 2'],
        ['rgb(205,133,0)','orange 3'],
        ['rgb(139,90,0)','orange 4'],
        ['rgb(255,250,240)','floralwhite'],
        ['rgb(253,245,230)','oldlace'],
        ['rgb(245,222,179)','wheat'],
        ['rgb(255,231,186)','wheat 1'],
        ['rgb(238,216,174)','wheat 2'],
        ['rgb(205,186,150)','wheat 3'],
        ['rgb(139,126,102)','wheat 4'],
        ['rgb(255,228,181)','moccasin'],
        ['rgb(255,239,213)','papayawhip'],
        ['rgb(255,235,205)','blanchedalmond'],
        ['rgb(255,222,173)','navajowhite 1 (navajowhite)'],
        ['rgb(238,207,161)','navajowhite 2'],
        ['rgb(205,179,139)','navajowhite 3'],
        ['rgb(139,121,94)','navajowhite 4'],
        ['rgb(252,230,201)','eggshell'],
        ['rgb(210,180,140)','tan'],
        ['rgb(156,102,31)','brick'],
        ['rgb(255,153,18)','cadmiumyellow'],
        ['rgb(250,235,215)','antiquewhite'],
        ['rgb(255,239,219)','antiquewhite 1'],
        ['rgb(238,223,204)','antiquewhite 2'],
        ['rgb(205,192,176)','antiquewhite 3'],
        ['rgb(139,131,120)','antiquewhite 4'],
        ['rgb(222,184,135)','burlywood'],
        ['rgb(255,211,155)','burlywood 1'],
        ['rgb(238,197,145)','burlywood 2'],
        ['rgb(205,170,125)','burlywood 3'],
        ['rgb(139,115,85)','burlywood 4'],
        ['rgb(255,228,196)','bisque 1 (bisque)'],
        ['rgb(238,213,183)','bisque 2'],
        ['rgb(205,183,158)','bisque 3'],
        ['rgb(139,125,107)','bisque 4'],
        ['rgb(227,168,105)','melon'],
        ['rgb(237,145,33)','carrot'],
        ['rgb(255,140,0)','darkorange'],
        ['rgb(255,127,0)','darkorange 1'],
        ['rgb(238,118,0)','darkorange 2'],
        ['rgb(205,102,0)','darkorange 3'],
        ['rgb(139,69,0)','darkorange 4'],
        ['rgb(255,128,0)','orange'],
        ['rgb(255,165,79)','tan 1'],
        ['rgb(238,154,73)','tan 2'],
        ['rgb(205,133,63)','tan 3 (peru)'],
        ['rgb(139,90,43)','tan 4'],
        ['rgb(250,240,230)','linen'],
        ['rgb(255,218,185)','peachpuff 1 (peachpuff)'],
        ['rgb(238,203,173)','peachpuff 2'],
        ['rgb(205,175,149)','peachpuff 3'],
        ['rgb(139,119,101)','peachpuff 4'],
        ['rgb(255,245,238)','seashell 1 (seashell)'],
        ['rgb(238,229,222)','seashell 2'],
        ['rgb(205,197,191)','seashell 3'],
        ['rgb(139,134,130)','seashell 4'],
        ['rgb(244,164,96)','sandybrown'],
        ['rgb(199,97,20)','rawsienna'],
        ['rgb(210,105,30)','chocolate'],
        ['rgb(255,127,36)','chocolate 1'],
        ['rgb(238,118,33)','chocolate 2'],
        ['rgb(205,102,29)','chocolate 3'],
        ['rgb(139,69,19)','chocolate 4 (saddlebrown)'],
        ['rgb(41,36,33)','ivoryblack'],
        ['rgb(255,125,64)','flesh'],
        ['rgb(255,97,3)','cadmiumorange'],
        ['rgb(138,54,15)','burntsienna'],
        ['rgb(160,82,45)','sienna'],
        ['rgb(255,130,71)','sienna 1'],
        ['rgb(238,121,66)','sienna 2'],
        ['rgb(205,104,57)','sienna 3'],
        ['rgb(139,71,38)','sienna 4'],
        ['rgb(255,160,122)','lightsalmon 1 (lightsalmon)'],
        ['rgb(238,149,114)','lightsalmon 2'],
        ['rgb(205,129,98)','lightsalmon 3'],
        ['rgb(139,87,66)','lightsalmon 4'],
        ['rgb(255,127,80)','coral'],
        ['rgb(255,69,0)','orangered 1 (orangered)'],
        ['rgb(238,64,0)','orangered 2'],
        ['rgb(205,55,0)','orangered 3'],
        ['rgb(139,37,0)','orangered 4'],
        ['rgb(94,38,18)','sepia'],
        ['rgb(233,150,122)','darksalmon'],
        ['rgb(255,140,105)','salmon 1'],
        ['rgb(238,130,98)','salmon 2'],
        ['rgb(205,112,84)','salmon 3'],
        ['rgb(139,76,57)','salmon 4'],
        ['rgb(255,114,86)','coral 1'],
        ['rgb(238,106,80)','coral 2'],
        ['rgb(205,91,69)','coral 3'],
        ['rgb(139,62,47)','coral 4'],
        ['rgb(138,51,36)','burntumber'],
        ['rgb(255,99,71)','tomato 1 (tomato)'],
        ['rgb(238,92,66)','tomato 2'],
        ['rgb(205,79,57)','tomato 3'],
        ['rgb(139,54,38)','tomato 4'],
        ['rgb(250,128,114)','salmon'],
        ['rgb(255,228,225)','mistyrose 1 (mistyrose)'],
        ['rgb(238,213,210)','mistyrose 2'],
        ['rgb(205,183,181)','mistyrose 3'],
        ['rgb(139,125,123)','mistyrose 4'],
        ['rgb(255,250,250)','snow 1 (snow)'],
        ['rgb(238,233,233)','snow 2'],
        ['rgb(205,201,201)','snow 3'],
        ['rgb(139,137,137)','snow 4'],
        ['rgb(188,143,143)','rosybrown'],
        ['rgb(255,193,193)','rosybrown 1'],
        ['rgb(238,180,180)','rosybrown 2'],
        ['rgb(205,155,155)','rosybrown 3'],
        ['rgb(139,105,105)','rosybrown 4'],
        ['rgb(240,128,128)','lightcoral'],
        ['rgb(205,92,92)','indianred'],
        ['rgb(255,106,106)','indianred 1'],
        ['rgb(238,99,99)','indianred 2'],
        ['rgb(139,58,58)','indianred 4'],
        ['rgb(205,85,85)','indianred 3'],
        ['rgb(165,42,42)','brown'],
        ['rgb(255,64,64)','brown 1'],
        ['rgb(238,59,59)','brown 2'],
        ['rgb(205,51,51)','brown 3'],
        ['rgb(139,35,35)','brown 4'],
        ['rgb(178,34,34)','firebrick'],
        ['rgb(255,48,48)','firebrick 1'],
        ['rgb(238,44,44)','firebrick 2'],
        ['rgb(205,38,38)','firebrick 3'],
        ['rgb(139,26,26)','firebrick 4'],
        ['rgb(255,0,0)','red 1 (red*)'],
        ['rgb(238,0,0)','red 2'],
        ['rgb(205,0,0)','red 3'],
        ['rgb(139,0,0)','red 4 (darkred)'],
        ['rgb(128,0,0)','maroon*'],
        ['rgb(142,56,142)','sgi beet'],
        ['rgb(113,113,198)','sgi slateblue'],
        ['rgb(125,158,192)','sgi lightblue'],
        ['rgb(56,142,142)','sgi teal'],
        ['rgb(113,198,113)','sgi chartreuse'],
        ['rgb(142,142,56)','sgi olivedrab'],
        ['rgb(197,193,170)','sgi brightgray'],
        ['rgb(198,113,113)','sgi salmon'],
        ['rgb(85,85,85)','sgi darkgray'],
        ['rgb(30,30,30)','sgi gray 12'],
        ['rgb(40,40,40)','sgi gray 16'],
        ['rgb(81,81,81)','sgi gray 32'],
        ['rgb(91,91,91)','sgi gray 36'],
        ['rgb(132,132,132)','sgi gray 52'],
        ['rgb(142,142,142)','sgi gray 56'],
        ['rgb(170,170,170)','sgi lightgray'],
        ['rgb(183,183,183)','sgi gray 72'],
        ['rgb(193,193,193)','sgi gray 76'],
        ['rgb(234,234,234)','sgi gray 92'],
        ['rgb(244,244,244)','sgi gray 96'],
        ['rgb(255,255,255)','white*'],
        ['rgb(245,245,245)','white smoke (gray 96)'],
        ['rgb(220,220,220)','gainsboro'],
        ['rgb(211,211,211)','lightgrey'],
        ['rgb(192,192,192)','silver*'],
        ['rgb(169,169,169)','darkgray'],
        ['rgb(128,128,128)','gray*'],
        ['rgb(105,105,105)','dimgray (gray 42)'],
        ['rgb(0,0,0)','black*'],
        ['rgb(252,252,252)','gray 99'],
        ['rgb(250,250,250)','gray 98'],
        ['rgb(247,247,247)','gray 97'],
        ['rgb(245,245,245)','white smoke (gray 96)'],
        ['rgb(242,242,242)','gray 95'],
        ['rgb(240,240,240)','gray 94'],
        ['rgb(237,237,237)','gray 93'],
        ['rgb(235,235,235)','gray 92'],
        ['rgb(232,232,232)','gray 91'],
        ['rgb(229,229,229)','gray 90'],
        ['rgb(227,227,227)','gray 89'],
        ['rgb(224,224,224)','gray 88'],
        ['rgb(222,222,222)','gray 87'],
        ['rgb(219,219,219)','gray 86'],
        ['rgb(217,217,217)','gray 85'],
        ['rgb(214,214,214)','gray 84'],
        ['rgb(212,212,212)','gray 83'],
        ['rgb(209,209,209)','gray 82'],
        ['rgb(207,207,207)','gray 81'],
        ['rgb(204,204,204)','gray 80'],
        ['rgb(201,201,201)','gray 79'],
        ['rgb(199,199,199)','gray 78'],
        ['rgb(196,196,196)','gray 77'],
        ['rgb(194,194,194)','gray 76'],
        ['rgb(191,191,191)','gray 75'],
        ['rgb(189,189,189)','gray 74'],
        ['rgb(186,186,186)','gray 73'],
        ['rgb(184,184,184)','gray 72'],
        ['rgb(181,181,181)','gray 71'],
        ['rgb(179,179,179)','gray 70'],
        ['rgb(176,176,176)','gray 69'],
        ['rgb(173,173,173)','gray 68'],
        ['rgb(171,171,171)','gray 67'],
        ['rgb(168,168,168)','gray 66'],
        ['rgb(166,166,166)','gray 65'],
        ['rgb(163,163,163)','gray 64'],
        ['rgb(161,161,161)','gray 63'],
        ['rgb(158,158,158)','gray 62'],
        ['rgb(156,156,156)','gray 61'],
        ['rgb(153,153,153)','gray 60'],
        ['rgb(150,150,150)','gray 59'],
        ['rgb(148,148,148)','gray 58'],
        ['rgb(145,145,145)','gray 57'],
        ['rgb(143,143,143)','gray 56'],
        ['rgb(140,140,140)','gray 55'],
        ['rgb(138,138,138)','gray 54'],
        ['rgb(135,135,135)','gray 53'],
        ['rgb(133,133,133)','gray 52'],
        ['rgb(130,130,130)','gray 51'],
        ['rgb(127,127,127)','gray 50'],
        ['rgb(125,125,125)','gray 49'],
        ['rgb(122,122,122)','gray 48'],
        ['rgb(120,120,120)','gray 47'],
        ['rgb(117,117,117)','gray 46'],
        ['rgb(115,115,115)','gray 45'],
        ['rgb(112,112,112)','gray 44'],
        ['rgb(110,110,110)','gray 43'],
        ['rgb(107,107,107)','gray 42'],
        ['rgb(105,105,105)','dimgray (gray 42)'],
        ['rgb(102,102,102)','gray 40'],
        ['rgb(99,99,99)','gray 39'],
        ['rgb(97,97,97)','gray 38'],
        ['rgb(94,94,94)','gray 37'],
        ['rgb(92,92,92)','gray 36'],
        ['rgb(89,89,89)','gray 35'],
        ['rgb(87,87,87)','gray 34'],
        ['rgb(84,84,84)','gray 33'],
        ['rgb(82,82,82)','gray 32'],
        ['rgb(79,79,79)','gray 31'],
        ['rgb(77,77,77)','gray 30'],
        ['rgb(74,74,74)','gray 29'],
        ['rgb(71,71,71)','gray 28'],
        ['rgb(69,69,69)','gray 27'],
        ['rgb(66,66,66)','gray 26'],
        ['rgb(64,64,64)','gray 25'],
        ['rgb(61,61,61)','gray 24'],
        ['rgb(59,59,59)','gray 23'],
        ['rgb(56,56,56)','gray 22'],
        ['rgb(54,54,54)','gray 21'],
        ['rgb(51,51,51)','gray 20'],
        ['rgb(48,48,48)','gray 19'],
        ['rgb(46,46,46)','gray 18'],
        ['rgb(43,43,43)','gray 17'],
        ['rgb(41,41,41)','gray 16'],
        ['rgb(38,38,38)','gray 15'],
        ['rgb(36,36,36)','gray 14'],
        ['rgb(33,33,33)','gray 13'],
        ['rgb(31,31,31)','gray 12'],
        ['rgb(28,28,28)','gray 11'],
        ['rgb(26,26,26)','gray 10'],
        ['rgb(23,23,23)','gray 9'],
        ['rgb(20,20,20)','gray 8'],
        ['rgb(18,18,18)','gray 7'],
        ['rgb(15,15,15)','gray 6'],
        ['rgb(13,13,13)','gray 5'],
        ['rgb(10,10,10)','gray 4'],
        ['rgb(8,8,8)','gray 3'],
        ['rgb(5,5,5)','gray 2'],
        ['rgb(3,3,3)','gray 1']
      ],
      fields: [
         {name: 'code', type: 'string'},
         {name: 'name', type: 'string'}
      ]
    });
    this.callParent([config]);
  },
  alias: ['widget.colorcombo'],
  typeAhead: true,
  triggerAction: 'all',
  lazyRender:true,
  mode: 'local',
  tpl: '<tpl for="."><div class="x-boundlist-item" style="background-color:{code};">{name}</div></tpl>',
  displayField: 'name',
  valueField: 'code'
})
