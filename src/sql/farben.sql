delimiter ;

CREATE TABLE IF NOT EXISTS `farben` (
    `name` varchar(255) DEFAULT NULL,
    `rgb` varchar(20) NOT NULL DEFAULT '',
    PRIMARY KEY (`rgb`)
);

INSERT INTO
    `farben`
VALUES
    ('black*', 'rgb(0,0,0)'),
('navy*', 'rgb(0,0,128)'),
('blue 4 (darkblue)', 'rgb(0,0,139)'),
('blue 3 (mediumblue)', 'rgb(0,0,205)'),
('blue 2', 'rgb(0,0,238)'),
('blue*', 'rgb(0,0,255)'),
('darkgreen', 'rgb(0,100,0)'),
('deepskyblue 4', 'rgb(0,104,139)'),
('green*', 'rgb(0,128,0)'),
('teal*', 'rgb(0,128,128)'),
('turquoise 4', 'rgb(0,134,139)'),
('green 4', 'rgb(0,139,0)'),
('cyan 4 (darkcyan)', 'rgb(0,139,139)'),
('springgreen 3', 'rgb(0,139,69)'),
('deepskyblue 3', 'rgb(0,154,205)'),
('deepskyblue 2', 'rgb(0,178,238)'),
('deepskyblue 1 (deepskyblue)', 'rgb(0,191,255)'),
('turquoise 3', 'rgb(0,197,205)'),
('turquoiseblue', 'rgb(0,199,140)'),
('emeraldgreen', 'rgb(0,201,87)'),
('green 3', 'rgb(0,205,0)'),
('springgreen 2', 'rgb(0,205,102)'),
('cyan 3', 'rgb(0,205,205)'),
('darkturquoise', 'rgb(0,206,209)'),
('turquoise 2', 'rgb(0,229,238)'),
('green 2', 'rgb(0,238,0)'),
('springgreen 1', 'rgb(0,238,118)'),
('cyan 2', 'rgb(0,238,238)'),
('turquoise 1', 'rgb(0,245,255)'),
('mediumspringgreen', 'rgb(0,250,154)'),
('green 1 (lime*)', 'rgb(0,255,0)'),
('springgreen', 'rgb(0,255,127)'),
('cyan / aqua*', 'rgb(0,255,255)'),
('gray 4', 'rgb(10,10,10)'),
('cornflowerblue', 'rgb(100,149,237)'),
('gray 40', 'rgb(102,102,102)'),
('paleturquoise 4', 'rgb(102,139,139)'),
('chartreuse 3', 'rgb(102,205,0)'),
(
        'aquamarine 3 (mediumaquamarine)',
        'rgb(102,205,170)'
    ),
('lightblue 4', 'rgb(104,131,139)'),
('darkorchid 4', 'rgb(104,34,139)'),
('dimgray (gray 42)', 'rgb(105,105,105)'),
('darkseagreen 4', 'rgb(105,139,105)'),
('olivedrab 4', 'rgb(105,139,34)'),
('slateblue 3', 'rgb(105,89,205)'),
('slateblue', 'rgb(106,90,205)'),
('gray 42', 'rgb(107,107,107)'),
('olivedrab', 'rgb(107,142,35)'),
('slategray 4', 'rgb(108,123,139)'),
('skyblue 3', 'rgb(108,166,205)'),
('gray 43', 'rgb(110,110,110)'),
('lightsteelblue 4', 'rgb(110,123,139)'),
('darkolivegreen 4', 'rgb(110,139,61)'),
('gray 43.1', 'rgb(111,111,11)'),
('gray 44', 'rgb(112,112,112)'),
('slategray', 'rgb(112,128,144)'),
('sgi slateblue', 'rgb(113,113,198)'),
('sgi chartreuse', 'rgb(113,198,113)'),
('gray 45', 'rgb(115,115,115)'),
('gray 46', 'rgb(117,117,117)'),
('chartreuse 2', 'rgb(118,238,0)'),
('aquamarine 2', 'rgb(118,238,198)'),
('lightslategray', 'rgb(119,136,153)'),
('gray 47', 'rgb(120,120,120)'),
('darkslategray 3', 'rgb(121,205,205)'),
('slateblue 2', 'rgb(122,103,238)'),
('gray 48', 'rgb(122,122,122)'),
('lightcyan 4', 'rgb(122,139,139)'),
('cadetblue 3', 'rgb(122,197,205)'),
('mediumorchid 4', 'rgb(122,55,139)'),
('mediumslateblue', 'rgb(123,104,238)'),
('palegreen 3', 'rgb(124,205,124)'),
('lawngreen', 'rgb(124,252,0)'),
('gray 49', 'rgb(125,125,125)'),
('sgi lightblue', 'rgb(125,158,192)'),
('purple 3', 'rgb(125,38,205)'),
('skyblue 2', 'rgb(126,192,238)'),
('gray 50', 'rgb(127,127,127)'),
('chartreuse 1 (chartreuse)', 'rgb(127,255,0)'),
('aquamarine 1 (aquamarine)', 'rgb(127,255,212)'),
('maroon*', 'rgb(128,0,0)'),
('purple*', 'rgb(128,0,128)'),
('olive*', 'rgb(128,128,0)'),
('warmgrey', 'rgb(128,128,105)'),
('gray*', 'rgb(128,128,128)'),
('coldgrey', 'rgb(128,138,135)'),
('gray 5', 'rgb(13,13,13)'),
('gray 51', 'rgb(130,130,130)'),
('slateblue 1', 'rgb(131,111,255)'),
('honeydew 4', 'rgb(131,139,131)'),
('azure 4', 'rgb(131,139,139)'),
('lightslateblue', 'rgb(132,112,255)'),
('sgi gray 52', 'rgb(132,132,132)'),
('gray 52', 'rgb(133,133,133)'),
('gray 53', 'rgb(135,135,135)'),
('skyblue', 'rgb(135,206,235)'),
('lightskyblue', 'rgb(135,206,250)'),
('skyblue 1', 'rgb(135,206,255)'),
('raspberry', 'rgb(135,38,87)'),
('mediumpurple 3', 'rgb(137,104,205)'),
('gray 54', 'rgb(138,138,138)'),
('blueviolet', 'rgb(138,43,226)'),
('burntumber', 'rgb(138,51,36)'),
('burntsienna', 'rgb(138,54,15)'),
('red 4 (darkred)', 'rgb(139,0,0)'),
('magenta 4 (darkmagenta)', 'rgb(139,0,139)'),
('deeppink 4', 'rgb(139,10,80)'),
('darkgoldenrod 4', 'rgb(139,101,8)'),
('plum 4', 'rgb(139,102,139)'),
('rosybrown 4', 'rgb(139,105,105)'),
('goldenrod 4', 'rgb(139,105,20)'),
('burlywood 4', 'rgb(139,115,85)'),
('gold 4', 'rgb(139,117,0)'),
('peachpuff 4', 'rgb(139,119,101)'),
('navajowhite 4', 'rgb(139,121,94)'),
('thistle 4', 'rgb(139,123,139)'),
('bisque 4', 'rgb(139,125,107)'),
('mistyrose 4', 'rgb(139,125,123)'),
('wheat 4', 'rgb(139,126,102)'),
('lightgoldenrod 4', 'rgb(139,129,76)'),
('antiquewhite 4', 'rgb(139,131,120)'),
('lavenderblush 4', 'rgb(139,131,134)'),
('seashell 4', 'rgb(139,134,130)'),
('khaki 4', 'rgb(139,134,78)'),
('cornsilk 4', 'rgb(139,136,120)'),
('lemonchiffon 4', 'rgb(139,137,112)'),
('snow 4', 'rgb(139,137,137)'),
('yellow 4', 'rgb(139,139,0)'),
('lightyellow 4', 'rgb(139,139,122)'),
('ivory 4', 'rgb(139,139,131)'),
('firebrick 4', 'rgb(139,26,26)'),
('maroon 4', 'rgb(139,28,98)'),
('violetred 4', 'rgb(139,34,82)'),
('brown 4', 'rgb(139,35,35)'),
('orangered 4', 'rgb(139,37,0)'),
('tomato 4', 'rgb(139,54,38)'),
('indianred 4', 'rgb(139,58,58)'),
('hotpink 4', 'rgb(139,58,98)'),
('coral 4', 'rgb(139,62,47)'),
('darkorange 4', 'rgb(139,69,0)'),
('chocolate 4 (saddlebrown)', 'rgb(139,69,19)'),
('orchid 4', 'rgb(139,71,137)'),
('sienna 4', 'rgb(139,71,38)'),
('palevioletred 4', 'rgb(139,71,93)'),
('salmon 4', 'rgb(139,76,57)'),
('lightsalmon 4', 'rgb(139,87,66)'),
('orange 4', 'rgb(139,90,0)'),
('tan 4', 'rgb(139,90,43)'),
('lightpink 4', 'rgb(139,95,101)'),
('pink 4', 'rgb(139,99,108)'),
('gray 55', 'rgb(140,140,140)'),
('lightskyblue 3', 'rgb(141,182,205)'),
('darkslategray 2', 'rgb(141,238,238)'),
('sgi gray 56', 'rgb(142,142,142)'),
('sgi olivedrab', 'rgb(142,142,56)'),
('cadetblue 2', 'rgb(142,229,238)'),
('sgi beet', 'rgb(142,56,142)'),
('gray 56', 'rgb(143,143,143)'),
('darkseagreen', 'rgb(143,188,143)'),
('palegreen 2 (lightgreen)', 'rgb(144,238,144)'),
('gray 57', 'rgb(145,145,145)'),
('purple 2', 'rgb(145,44,238)'),
('mediumpurple', 'rgb(147,112,219)'),
('darkviolet', 'rgb(148,0,211)'),
('gray 58', 'rgb(148,148,148)'),
('gray 6', 'rgb(15,15,15)'),
('gray 59', 'rgb(150,150,150)'),
('paleturquoise 3', 'rgb(150,205,205)'),
('darkslategray 1', 'rgb(151,255,255)'),
('cadetblue 1', 'rgb(152,245,255)'),
('palegreen', 'rgb(152,251,152)'),
('gray 60', 'rgb(153,153,153)'),
('darkorchid', 'rgb(153,50,204)'),
('lightblue 3', 'rgb(154,192,205)'),
('olivedrab 3 (yellowgreen)', 'rgb(154,205,50)'),
('palegreen 1', 'rgb(154,255,154)'),
('darkorchid 3', 'rgb(154,50,205)'),
('darkseagreen 3', 'rgb(155,205,155)'),
('purple 1', 'rgb(155,48,255)'),
('brick', 'rgb(156,102,31)'),
('gray 61', 'rgb(156,156,156)'),
('gray 62', 'rgb(158,158,158)'),
('mediumpurple 2', 'rgb(159,121,238)'),
('slategray 3', 'rgb(159,182,205)'),
('dodgerblue 4', 'rgb(16,78,139)'),
('sienna', 'rgb(160,82,45)'),
('gray 63', 'rgb(161,161,161)'),
('lightsteelblue 3', 'rgb(162,181,205)'),
('darkolivegreen 3', 'rgb(162,205,90)'),
('gray 64', 'rgb(163,163,163)'),
('lightskyblue 2', 'rgb(164,211,238)'),
('brown', 'rgb(165,42,42)'),
('gray 65', 'rgb(166,166,166)'),
('gray 66', 'rgb(168,168,168)'),
('darkgray', 'rgb(169,169,169)'),
('sgi lightgray', 'rgb(170,170,170)'),
('mediumpurple 1', 'rgb(171,130,255)'),
('gray 67', 'rgb(171,171,171)'),
('gray 68', 'rgb(173,173,173)'),
('lightblue', 'rgb(173,216,230)'),
('greenyellow', 'rgb(173,255,47)'),
(
        'paleturquoise 2 (paleturquoise)',
        'rgb(174,238,238)'
    ),
('gray 69', 'rgb(176,176,176)'),
('lightsteelblue', 'rgb(176,196,222)'),
('powderblue', 'rgb(176,224,230)'),
('lightskyblue 1', 'rgb(176,226,255)'),
('indian red', 'rgb(176,23,31)'),
('lightblue 2', 'rgb(178,223,238)'),
('firebrick', 'rgb(178,34,34)'),
('darkorchid 2', 'rgb(178,58,238)'),
('gray 70', 'rgb(179,179,179)'),
('olivedrab 2', 'rgb(179,238,58)'),
('gray 7', 'rgb(18,18,18)'),
('lightcyan 3', 'rgb(180,205,205)'),
('darkseagreen 2', 'rgb(180,238,180)'),
('mediumorchid 3', 'rgb(180,82,205)'),
('gray 71', 'rgb(181,181,181)'),
('sgi gray 72', 'rgb(183,183,183)'),
('darkgoldenrod', 'rgb(184,134,11)'),
('gray 72', 'rgb(184,184,184)'),
('slategray 2', 'rgb(185,211,238)'),
('gray 73', 'rgb(186,186,186)'),
('mediumorchid', 'rgb(186,85,211)'),
('paleturquoise 1', 'rgb(187,255,255)'),
('rosybrown', 'rgb(188,143,143)'),
('lightsteelblue 2', 'rgb(188,210,238)'),
('darkolivegreen 2', 'rgb(188,238,104)'),
('darkkhaki', 'rgb(189,183,107)'),
('gray 74', 'rgb(189,189,189)'),
('mint', 'rgb(189,252,201)'),
('gray 75', 'rgb(191,191,191)'),
('lightblue 1', 'rgb(191,239,255)'),
('darkorchid 1', 'rgb(191,62,255)'),
('silver*', 'rgb(192,192,192)'),
('olivedrab 1', 'rgb(192,255,62)'),
('sgi gray 76', 'rgb(193,193,193)'),
('honeydew 3', 'rgb(193,205,193)'),
('azure 3', 'rgb(193,205,205)'),
('darkseagreen 1', 'rgb(193,255,193)'),
('gray 76', 'rgb(194,194,194)'),
('gray 77', 'rgb(196,196,196)'),
('sgi brightgray', 'rgb(197,193,170)'),
('sgi salmon', 'rgb(198,113,113)'),
('slategray 1', 'rgb(198,226,255)'),
('gray 78', 'rgb(199,199,199)'),
('mediumvioletred', 'rgb(199,21,133)'),
('rawsienna', 'rgb(199,97,20)'),
('gray 8', 'rgb(20,20,20)'),
('gray 79', 'rgb(201,201,201)'),
('lightsteelblue 1', 'rgb(202,225,255)'),
('darkolivegreen 1', 'rgb(202,255,112)'),
('gray 80', 'rgb(204,204,204)'),
('red 3', 'rgb(205,0,0)'),
('magenta 3', 'rgb(205,0,205)'),
('darkorange 3', 'rgb(205,102,0)'),
('chocolate 3', 'rgb(205,102,29)'),
('palevioletred 3', 'rgb(205,104,137)'),
('sienna 3', 'rgb(205,104,57)'),
('orchid 3', 'rgb(205,105,201)'),
('salmon 3', 'rgb(205,112,84)'),
('lightsalmon 3', 'rgb(205,129,98)'),
('orange 3', 'rgb(205,133,0)'),
('tan 3 (peru)', 'rgb(205,133,63)'),
('lightpink 3', 'rgb(205,140,149)'),
('pink 3', 'rgb(205,145,158)'),
('darkgoldenrod 3', 'rgb(205,149,12)'),
('plum 3', 'rgb(205,150,205)'),
('rosybrown 3', 'rgb(205,155,155)'),
('goldenrod 3', 'rgb(205,155,29)'),
('deeppink 3', 'rgb(205,16,118)'),
('burlywood 3', 'rgb(205,170,125)'),
('gold 3', 'rgb(205,173,0)'),
('peachpuff 3', 'rgb(205,175,149)'),
('navajowhite 3', 'rgb(205,179,139)'),
('thistle 3', 'rgb(205,181,205)'),
('bisque 3', 'rgb(205,183,158)'),
('mistyrose 3', 'rgb(205,183,181)'),
('wheat 3', 'rgb(205,186,150)'),
('lightgoldenrod 3', 'rgb(205,190,112)'),
('antiquewhite 3', 'rgb(205,192,176)'),
('lavenderblush 3', 'rgb(205,193,197)'),
('seashell 3', 'rgb(205,197,191)'),
('khaki 3', 'rgb(205,198,115)'),
('cornsilk 3', 'rgb(205,200,177)'),
('lemonchiffon 3', 'rgb(205,201,165)'),
('snow 3', 'rgb(205,201,201)'),
('yellow 3', 'rgb(205,205,0)'),
('lightyellow 3', 'rgb(205,205,180)'),
('ivory 3', 'rgb(205,205,193)'),
('firebrick 3', 'rgb(205,38,38)'),
('maroon 3', 'rgb(205,41,144)'),
('violetred 3', 'rgb(205,50,120)'),
('brown 3', 'rgb(205,51,51)'),
('orangered 3', 'rgb(205,55,0)'),
('tomato 3', 'rgb(205,79,57)'),
('indianred 3', 'rgb(205,85,85)'),
('coral 3', 'rgb(205,91,69)'),
('indianred', 'rgb(205,92,92)'),
('hotpink 3', 'rgb(205,96,144)'),
('gray 81', 'rgb(207,207,207)'),
('violetred', 'rgb(208,32,144)'),
('gray 82', 'rgb(209,209,209)'),
('lightcyan 2', 'rgb(209,238,238)'),
('mediumorchid 2', 'rgb(209,95,238)'),
('chocolate', 'rgb(210,105,30)'),
('tan', 'rgb(210,180,140)'),
('lightgrey', 'rgb(211,211,211)'),
('gray 83', 'rgb(212,212,212)'),
('gray 84', 'rgb(214,214,214)'),
('thistle', 'rgb(216,191,216)'),
('gray 85', 'rgb(217,217,217)'),
('orchid', 'rgb(218,112,214)'),
('goldenrod', 'rgb(218,165,32)'),
('palevioletred', 'rgb(219,112,147)'),
('gray 86', 'rgb(219,219,219)'),
('crimson', 'rgb(220,20,60)'),
('gainsboro', 'rgb(220,220,220)'),
('plum', 'rgb(221,160,221)'),
('burlywood', 'rgb(222,184,135)'),
('gray 87', 'rgb(222,222,222)'),
('mediumorchid 1', 'rgb(224,102,255)'),
('gray 88', 'rgb(224,224,224)'),
('honeydew 2', 'rgb(224,238,224)'),
('azure 2', 'rgb(224,238,238)'),
('lightcyan 1 (lightcyan)', 'rgb(224,255,255)'),
('melon', 'rgb(227,168,105)'),
('banana', 'rgb(227,207,87)'),
('gray 89', 'rgb(227,227,227)'),
('gray 90', 'rgb(229,229,229)'),
('gray 9', 'rgb(23,23,23)'),
('lavender', 'rgb(230,230,250)'),
('gray 91', 'rgb(232,232,232)'),
('darksalmon', 'rgb(233,150,122)'),
('sgi gray 92', 'rgb(234,234,234)'),
('gray 92', 'rgb(235,235,235)'),
('carrot', 'rgb(237,145,33)'),
('gray 93', 'rgb(237,237,237)'),
('red 2', 'rgb(238,0,0)'),
('magenta 2', 'rgb(238,0,238)'),
('hotpink 2', 'rgb(238,106,167)'),
('coral 2', 'rgb(238,106,80)'),
('darkorange 2', 'rgb(238,118,0)'),
('chocolate 2', 'rgb(238,118,33)'),
('palevioletred 2', 'rgb(238,121,159)'),
('sienna 2', 'rgb(238,121,66)'),
('orchid 2', 'rgb(238,122,233)'),
('violet', 'rgb(238,130,238)'),
('salmon 2', 'rgb(238,130,98)'),
('lightsalmon 2', 'rgb(238,149,114)'),
('orange 2', 'rgb(238,154,0)'),
('tan 2', 'rgb(238,154,73)'),
('lightpink 2', 'rgb(238,162,173)'),
('pink 2', 'rgb(238,169,184)'),
('darkgoldenrod 2', 'rgb(238,173,14)'),
('plum 2', 'rgb(238,174,238)'),
('deeppink 2', 'rgb(238,18,137)'),
('rosybrown 2', 'rgb(238,180,180)'),
('goldenrod 2', 'rgb(238,180,34)'),
('burlywood 2', 'rgb(238,197,145)'),
('gold 2', 'rgb(238,201,0)'),
('peachpuff 2', 'rgb(238,203,173)'),
('navajowhite 2', 'rgb(238,207,161)'),
('thistle 2', 'rgb(238,210,238)'),
('bisque 2', 'rgb(238,213,183)'),
('mistyrose 2', 'rgb(238,213,210)'),
('wheat 2', 'rgb(238,216,174)'),
('lightgoldenrod 2', 'rgb(238,220,130)'),
('antiquewhite 2', 'rgb(238,223,204)'),
('lavenderblush 2', 'rgb(238,224,229)'),
('seashell 2', 'rgb(238,229,222)'),
('khaki 2', 'rgb(238,230,133)'),
('palegoldenrod', 'rgb(238,232,170)'),
('cornsilk 2', 'rgb(238,232,205)'),
('lemonchiffon 2', 'rgb(238,233,191)'),
('snow 2', 'rgb(238,233,233)'),
('yellow 2', 'rgb(238,238,0)'),
('lightyellow 2', 'rgb(238,238,209)'),
('ivory 2', 'rgb(238,238,224)'),
('firebrick 2', 'rgb(238,44,44)'),
('maroon 2', 'rgb(238,48,167)'),
('violetred 2', 'rgb(238,58,140)'),
('brown 2', 'rgb(238,59,59)'),
('orangered 2', 'rgb(238,64,0)'),
('tomato 2', 'rgb(238,92,66)'),
('indianred 2', 'rgb(238,99,99)'),
('dodgerblue 3', 'rgb(24,116,205)'),
('lightcoral', 'rgb(240,128,128)'),
('khaki', 'rgb(240,230,140)'),
('gray 94', 'rgb(240,240,240)'),
('aliceblue', 'rgb(240,248,255)'),
('honeydew 1 (honeydew)', 'rgb(240,255,240)'),
('azure 1 (azure)', 'rgb(240,255,255)'),
('gray 95', 'rgb(242,242,242)'),
('sandybrown', 'rgb(244,164,96)'),
('sgi gray 96', 'rgb(244,244,244)'),
('wheat', 'rgb(245,222,179)'),
('beige', 'rgb(245,245,220)'),
('white smoke (gray 96)', 'rgb(245,245,245)'),
('mintcream', 'rgb(245,255,250)'),
('gray 97', 'rgb(247,247,247)'),
('ghostwhite', 'rgb(248,248,255)'),
('midnightblue', 'rgb(25,25,112)'),
('salmon', 'rgb(250,128,114)'),
('antiquewhite', 'rgb(250,235,215)'),
('linen', 'rgb(250,240,230)'),
('lightgoldenrodyellow', 'rgb(250,250,210)'),
('gray 98', 'rgb(250,250,250)'),
('eggshell', 'rgb(252,230,201)'),
('gray 99', 'rgb(252,252,252)'),
('oldlace', 'rgb(253,245,230)'),
('red 1 (red*)', 'rgb(255,0,0)'),
('magenta (fuchsia*)', 'rgb(255,0,255)'),
('hotpink', 'rgb(255,105,180)'),
('indianred 1', 'rgb(255,106,106)'),
('hotpink 1', 'rgb(255,110,180)'),
('coral 1', 'rgb(255,114,86)'),
('flesh', 'rgb(255,125,64)'),
('darkorange 1', 'rgb(255,127,0)'),
('chocolate 1', 'rgb(255,127,36)'),
('coral', 'rgb(255,127,80)'),
('orange', 'rgb(255,128,0)'),
('palevioletred 1', 'rgb(255,130,171)'),
('sienna 1', 'rgb(255,130,71)'),
('orchid 1', 'rgb(255,131,250)'),
('darkorange', 'rgb(255,140,0)'),
('salmon 1', 'rgb(255,140,105)'),
('cadmiumyellow', 'rgb(255,153,18)'),
('lightsalmon 1 (lightsalmon)', 'rgb(255,160,122)'),
('orange 1 (orange)', 'rgb(255,165,0)'),
('tan 1', 'rgb(255,165,79)'),
('lightpink 1', 'rgb(255,174,185)'),
('pink 1', 'rgb(255,181,197)'),
('lightpink', 'rgb(255,182,193)'),
('darkgoldenrod 1', 'rgb(255,185,15)'),
('plum 1', 'rgb(255,187,255)'),
('pink', 'rgb(255,192,203)'),
('rosybrown 1', 'rgb(255,193,193)'),
('goldenrod 1', 'rgb(255,193,37)'),
('deeppink 1 (deeppink)', 'rgb(255,20,147)'),
('burlywood 1', 'rgb(255,211,155)'),
('gold 1 (gold)', 'rgb(255,215,0)'),
('peachpuff 1 (peachpuff)', 'rgb(255,218,185)'),
('navajowhite 1 (navajowhite)', 'rgb(255,222,173)'),
('thistle 1', 'rgb(255,225,255)'),
('moccasin', 'rgb(255,228,181)'),
('bisque 1 (bisque)', 'rgb(255,228,196)'),
('mistyrose 1 (mistyrose)', 'rgb(255,228,225)'),
('wheat 1', 'rgb(255,231,186)'),
('blanchedalmond', 'rgb(255,235,205)'),
('lightgoldenrod 1', 'rgb(255,236,139)'),
('papayawhip', 'rgb(255,239,213)'),
('antiquewhite 1', 'rgb(255,239,219)'),
(
        'lavenderblush 1 (lavenderblush)',
        'rgb(255,240,245)'
    ),
('seashell 1 (seashell)', 'rgb(255,245,238)'),
('khaki 1', 'rgb(255,246,143)'),
('cornsilk 1 (cornsilk)', 'rgb(255,248,220)'),
(
        'lemonchiffon 1 (lemonchiffon)',
        'rgb(255,250,205)'
    ),
('floralwhite', 'rgb(255,250,240)'),
('snow 1 (snow)', 'rgb(255,250,250)'),
('yellow 1 (yellow*)', 'rgb(255,255,0)'),
('lightyellow 1 (lightyellow)', 'rgb(255,255,224)'),
('ivory 1 (ivory)', 'rgb(255,255,240)'),
('white*', 'rgb(255,255,255)'),
('firebrick 1', 'rgb(255,48,48)'),
('maroon 1', 'rgb(255,52,179)'),
('violetred 1', 'rgb(255,62,150)'),
('brown 1', 'rgb(255,64,64)'),
('orangered 1 (orangered)', 'rgb(255,69,0)'),
('cadmiumorange', 'rgb(255,97,3)'),
('tomato 1 (tomato)', 'rgb(255,99,71)'),
('gray 10', 'rgb(26,26,26)'),
('dodgerblue 2', 'rgb(28,134,238)'),
('gray 11', 'rgb(28,28,28)'),
('manganeseblue', 'rgb(3,168,158)'),
('gray 1', 'rgb(3,3,3)'),
('dodgerblue 1 (dodgerblue)', 'rgb(30,144,255)'),
('sgi gray 12', 'rgb(30,30,30)'),
('gray 12', 'rgb(31,31,31)'),
('lightseagreen', 'rgb(32,178,170)'),
('gray 13', 'rgb(33,33,33)'),
('forestgreen', 'rgb(34,139,34)'),
('gray 14', 'rgb(36,36,36)'),
('gray 15', 'rgb(38,38,38)'),
('royalblue 4', 'rgb(39,64,139)'),
('sgi gray 16', 'rgb(40,40,40)'),
('ivoryblack', 'rgb(41,36,33)'),
('gray 16', 'rgb(41,41,41)'),
('gray 17', 'rgb(43,43,43)'),
('seagreen 4 (seagreen)', 'rgb(46,139,87)'),
('gray 18', 'rgb(46,46,46)'),
('darkslategray', 'rgb(47,79,79)'),
('sapgreen', 'rgb(48,128,20)'),
('gray 19', 'rgb(48,48,48)'),
('gray 2', 'rgb(5,5,5)'),
('limegreen', 'rgb(50,205,50)'),
('peacock', 'rgb(51,161,201)'),
('gray 20', 'rgb(51,51,51)'),
('steelblue 4', 'rgb(54,100,139)'),
('gray 21', 'rgb(54,54,54)'),
('sgi teal', 'rgb(56,142,142)'),
('gray 22', 'rgb(56,56,56)'),
('royalblue 3', 'rgb(58,95,205)'),
('gray 23', 'rgb(59,59,59)'),
('mediumseagreen', 'rgb(60,179,113)'),
('cobaltgreen', 'rgb(61,145,64)'),
('gray 24', 'rgb(61,61,61)'),
('cobalt', 'rgb(61,89,171)'),
('turquoise', 'rgb(64,224,208)'),
('gray 25', 'rgb(64,64,64)'),
('royalblue', 'rgb(65,105,225)'),
('gray 26', 'rgb(66,66,66)'),
('royalblue 2', 'rgb(67,110,238)'),
('seagreen 3', 'rgb(67,205,128)'),
('chartreuse 4', 'rgb(69,139,0)'),
('aquamarine 4', 'rgb(69,139,116)'),
('gray 27', 'rgb(69,69,69)'),
('steelblue', 'rgb(70,130,180)'),
('slateblue 4', 'rgb(71,60,139)'),
('gray 28', 'rgb(71,71,71)'),
('royalblue 1', 'rgb(72,118,255)'),
('mediumturquoise', 'rgb(72,209,204)'),
('darkslateblue', 'rgb(72,61,139)'),
('skyblue 4', 'rgb(74,112,139)'),
('gray 29', 'rgb(74,74,74)'),
('indigo', 'rgb(75,0,130)'),
('gray 30', 'rgb(77,77,77)'),
('seagreen 2', 'rgb(78,238,148)'),
('steelblue 3', 'rgb(79,148,205)'),
('gray 31', 'rgb(79,79,79)'),
('gray 3', 'rgb(8,8,8)'),
('sgi gray 32', 'rgb(81,81,81)'),
('darkslategray 4', 'rgb(82,139,139)'),
('gray 32', 'rgb(82,82,82)'),
('cadetblue 4', 'rgb(83,134,139)'),
('palegreen 4', 'rgb(84,139,84)'),
('seagreen 1', 'rgb(84,255,159)'),
('gray 33', 'rgb(84,84,84)'),
('darkolivegreen', 'rgb(85,107,47)'),
('purple 4', 'rgb(85,26,139)'),
('sgi darkgray', 'rgb(85,85,85)'),
('gray 34', 'rgb(87,87,87)'),
('gray 35', 'rgb(89,89,89)'),
('sgi gray 36', 'rgb(91,91,91)'),
('steelblue 2', 'rgb(92,172,238)'),
('gray 36', 'rgb(92,92,92)'),
('mediumpurple 4', 'rgb(93,71,139)'),
('sepia', 'rgb(94,38,18)'),
('gray 37', 'rgb(94,94,94)'),
('cadetblue', 'rgb(95,158,160)'),
('lightskyblue 4', 'rgb(96,123,139)'),
('gray 38', 'rgb(97,97,97)'),
('steelblue 1', 'rgb(99,184,255)'),
('gray 39', 'rgb(99,99,99)');