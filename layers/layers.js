var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_texts_1 = new ol.format.GeoJSON();
var features_texts_1 = format_texts_1.readFeatures(json_texts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_texts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_texts_1.addFeatures(features_texts_1);
var lyr_texts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_texts_1, 
                style: style_texts_1,
                popuplayertitle: 'texts',
                interactive: true,
                title: 'texts'
            });
var format_inserts_2 = new ol.format.GeoJSON();
var features_inserts_2 = format_inserts_2.readFeatures(json_inserts_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_inserts_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inserts_2.addFeatures(features_inserts_2);
var lyr_inserts_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inserts_2, 
                style: style_inserts_2,
                popuplayertitle: 'inserts',
                interactive: true,
                title: '<img src="styles/legend/inserts_2.png" /> inserts'
            });
var format_points_3 = new ol.format.GeoJSON();
var features_points_3 = format_points_3.readFeatures(json_points_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_points_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_points_3.addFeatures(features_points_3);
var lyr_points_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_points_3, 
                style: style_points_3,
                popuplayertitle: 'points',
                interactive: true,
                title: 'points'
            });
var format_texts_4 = new ol.format.GeoJSON();
var features_texts_4 = format_texts_4.readFeatures(json_texts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_texts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_texts_4.addFeatures(features_texts_4);
var lyr_texts_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_texts_4, 
                style: style_texts_4,
                popuplayertitle: 'texts',
                interactive: true,
                title: 'texts'
            });
var format_B1copy_5 = new ol.format.GeoJSON();
var features_B1copy_5 = format_B1copy_5.readFeatures(json_B1copy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B1copy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B1copy_5.addFeatures(features_B1copy_5);
var lyr_B1copy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B1copy_5, 
                style: style_B1copy_5,
                popuplayertitle: 'B1 copy',
                interactive: true,
                title: '<img src="styles/legend/B1copy_5.png" /> B1 copy'
            });
var format_B2copy_6 = new ol.format.GeoJSON();
var features_B2copy_6 = format_B2copy_6.readFeatures(json_B2copy_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B2copy_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B2copy_6.addFeatures(features_B2copy_6);
var lyr_B2copy_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B2copy_6, 
                style: style_B2copy_6,
                popuplayertitle: 'B2 copy',
                interactive: true,
                title: '<img src="styles/legend/B2copy_6.png" /> B2 copy'
            });
var format_B4copy_7 = new ol.format.GeoJSON();
var features_B4copy_7 = format_B4copy_7.readFeatures(json_B4copy_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B4copy_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B4copy_7.addFeatures(features_B4copy_7);
var lyr_B4copy_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B4copy_7, 
                style: style_B4copy_7,
                popuplayertitle: 'B4 copy',
                interactive: true,
                title: '<img src="styles/legend/B4copy_7.png" /> B4 copy'
            });
var format_B5copy_8 = new ol.format.GeoJSON();
var features_B5copy_8 = format_B5copy_8.readFeatures(json_B5copy_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B5copy_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B5copy_8.addFeatures(features_B5copy_8);
var lyr_B5copy_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B5copy_8, 
                style: style_B5copy_8,
                popuplayertitle: 'B5 copy',
                interactive: true,
                title: '<img src="styles/legend/B5copy_8.png" /> B5 copy'
            });
var format_B3copy_9 = new ol.format.GeoJSON();
var features_B3copy_9 = format_B3copy_9.readFeatures(json_B3copy_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B3copy_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B3copy_9.addFeatures(features_B3copy_9);
var lyr_B3copy_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B3copy_9, 
                style: style_B3copy_9,
                popuplayertitle: 'B3 copy',
                interactive: true,
                title: '<img src="styles/legend/B3copy_9.png" /> B3 copy'
            });
var format_B6copy_10 = new ol.format.GeoJSON();
var features_B6copy_10 = format_B6copy_10.readFeatures(json_B6copy_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B6copy_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B6copy_10.addFeatures(features_B6copy_10);
var lyr_B6copy_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B6copy_10, 
                style: style_B6copy_10,
                popuplayertitle: 'B6 copy',
                interactive: true,
                title: '<img src="styles/legend/B6copy_10.png" /> B6 copy'
            });
var format_B7copy_11 = new ol.format.GeoJSON();
var features_B7copy_11 = format_B7copy_11.readFeatures(json_B7copy_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B7copy_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B7copy_11.addFeatures(features_B7copy_11);
var lyr_B7copy_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B7copy_11, 
                style: style_B7copy_11,
                popuplayertitle: 'B7 copy',
                interactive: true,
                title: '<img src="styles/legend/B7copy_11.png" /> B7 copy'
            });
var format_B8copy_12 = new ol.format.GeoJSON();
var features_B8copy_12 = format_B8copy_12.readFeatures(json_B8copy_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B8copy_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B8copy_12.addFeatures(features_B8copy_12);
var lyr_B8copy_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B8copy_12, 
                style: style_B8copy_12,
                popuplayertitle: 'B8 copy',
                interactive: true,
                title: '<img src="styles/legend/B8copy_12.png" /> B8 copy'
            });
var format_B9copy_13 = new ol.format.GeoJSON();
var features_B9copy_13 = format_B9copy_13.readFeatures(json_B9copy_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B9copy_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B9copy_13.addFeatures(features_B9copy_13);
var lyr_B9copy_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B9copy_13, 
                style: style_B9copy_13,
                popuplayertitle: 'B9 copy',
                interactive: true,
                title: '<img src="styles/legend/B9copy_13.png" /> B9 copy'
            });
var format_B10copy_14 = new ol.format.GeoJSON();
var features_B10copy_14 = format_B10copy_14.readFeatures(json_B10copy_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B10copy_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B10copy_14.addFeatures(features_B10copy_14);
var lyr_B10copy_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B10copy_14, 
                style: style_B10copy_14,
                popuplayertitle: 'B10 copy',
                interactive: true,
                title: '<img src="styles/legend/B10copy_14.png" /> B10 copy'
            });
var format_B11copy_15 = new ol.format.GeoJSON();
var features_B11copy_15 = format_B11copy_15.readFeatures(json_B11copy_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B11copy_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B11copy_15.addFeatures(features_B11copy_15);
var lyr_B11copy_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B11copy_15, 
                style: style_B11copy_15,
                popuplayertitle: 'B11 copy',
                interactive: true,
                title: '<img src="styles/legend/B11copy_15.png" /> B11 copy'
            });
var format_B12copy_16 = new ol.format.GeoJSON();
var features_B12copy_16 = format_B12copy_16.readFeatures(json_B12copy_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B12copy_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B12copy_16.addFeatures(features_B12copy_16);
var lyr_B12copy_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B12copy_16, 
                style: style_B12copy_16,
                popuplayertitle: 'B12 copy',
                interactive: true,
                title: '<img src="styles/legend/B12copy_16.png" /> B12 copy'
            });
var format_B13copy_17 = new ol.format.GeoJSON();
var features_B13copy_17 = format_B13copy_17.readFeatures(json_B13copy_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B13copy_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B13copy_17.addFeatures(features_B13copy_17);
var lyr_B13copy_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B13copy_17, 
                style: style_B13copy_17,
                popuplayertitle: 'B13 copy',
                interactive: true,
                title: '<img src="styles/legend/B13copy_17.png" /> B13 copy'
            });
var format_B14copy_18 = new ol.format.GeoJSON();
var features_B14copy_18 = format_B14copy_18.readFeatures(json_B14copy_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B14copy_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B14copy_18.addFeatures(features_B14copy_18);
var lyr_B14copy_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B14copy_18, 
                style: style_B14copy_18,
                popuplayertitle: 'B14 copy',
                interactive: true,
                title: '<img src="styles/legend/B14copy_18.png" /> B14 copy'
            });
var format_LOT1BBDRYcopy_19 = new ol.format.GeoJSON();
var features_LOT1BBDRYcopy_19 = format_LOT1BBDRYcopy_19.readFeatures(json_LOT1BBDRYcopy_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT1BBDRYcopy_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT1BBDRYcopy_19.addFeatures(features_LOT1BBDRYcopy_19);
var lyr_LOT1BBDRYcopy_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT1BBDRYcopy_19, 
                style: style_LOT1BBDRYcopy_19,
                popuplayertitle: 'LOT1B-BDRY copy',
                interactive: true,
                title: '<img src="styles/legend/LOT1BBDRYcopy_19.png" /> LOT1B-BDRY copy'
            });
var format_LOT1ABDRYcopy_20 = new ol.format.GeoJSON();
var features_LOT1ABDRYcopy_20 = format_LOT1ABDRYcopy_20.readFeatures(json_LOT1ABDRYcopy_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOT1ABDRYcopy_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOT1ABDRYcopy_20.addFeatures(features_LOT1ABDRYcopy_20);
var lyr_LOT1ABDRYcopy_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOT1ABDRYcopy_20, 
                style: style_LOT1ABDRYcopy_20,
                popuplayertitle: 'LOT1A-BDRY copy',
                interactive: true,
                title: '<img src="styles/legend/LOT1ABDRYcopy_20.png" /> LOT1A-BDRY copy'
            });
var format_TCTTRAIL_21 = new ol.format.GeoJSON();
var features_TCTTRAIL_21 = format_TCTTRAIL_21.readFeatures(json_TCTTRAIL_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TCTTRAIL_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TCTTRAIL_21.addFeatures(features_TCTTRAIL_21);
var lyr_TCTTRAIL_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TCTTRAIL_21, 
                style: style_TCTTRAIL_21,
                popuplayertitle: 'TCT TRAIL',
                interactive: true,
                title: '<img src="styles/legend/TCTTRAIL_21.png" /> TCT TRAIL'
            });
var format_H1_22 = new ol.format.GeoJSON();
var features_H1_22 = format_H1_22.readFeatures(json_H1_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_H1_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_H1_22.addFeatures(features_H1_22);
var lyr_H1_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_H1_22, 
                style: style_H1_22,
                popuplayertitle: 'H-1',
                interactive: true,
                title: '<img src="styles/legend/H1_22.png" /> H-1'
            });
var format_CREEK_23 = new ol.format.GeoJSON();
var features_CREEK_23 = format_CREEK_23.readFeatures(json_CREEK_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CREEK_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CREEK_23.addFeatures(features_CREEK_23);
var lyr_CREEK_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CREEK_23, 
                style: style_CREEK_23,
                popuplayertitle: 'CREEK',
                interactive: true,
                title: '<img src="styles/legend/CREEK_23.png" /> CREEK'
            });
var format_TRAILPATH_24 = new ol.format.GeoJSON();
var features_TRAILPATH_24 = format_TRAILPATH_24.readFeatures(json_TRAILPATH_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRAILPATH_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRAILPATH_24.addFeatures(features_TRAILPATH_24);
var lyr_TRAILPATH_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TRAILPATH_24, 
                style: style_TRAILPATH_24,
                popuplayertitle: 'TRAIL PATH',
                interactive: true,
                title: '<img src="styles/legend/TRAILPATH_24.png" /> TRAIL PATH'
            });
var group_TANAYMOUNTAINBREEZ2OS = new ol.layer.Group({
                                layers: [lyr_B1copy_5,lyr_B2copy_6,lyr_B4copy_7,lyr_B5copy_8,lyr_B3copy_9,lyr_B6copy_10,lyr_B7copy_11,lyr_B8copy_12,lyr_B9copy_13,lyr_B10copy_14,lyr_B11copy_15,lyr_B12copy_16,lyr_B13copy_17,lyr_B14copy_18,lyr_LOT1BBDRYcopy_19,lyr_LOT1ABDRYcopy_20,],
                                fold: 'close',
                                title: 'TANAY MOUNTAIN BREEZ-2 OS'});
var group_ADJLOT = new ol.layer.Group({
                                layers: [lyr_inserts_2,lyr_points_3,lyr_texts_4,],
                                fold: 'open',
                                title: 'ADJ-LOT'});
var group_JRFLOTAREA = new ol.layer.Group({
                                layers: [lyr_texts_1,],
                                fold: 'close',
                                title: 'JRF LOT AREA'});
var group_TANAYMOUNTAINBREEZGE = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'TANAY MOUNTAIN BREEZ-GE'});
var group_JRFBLOCKCUT = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'JRF BLOCK CUT'});

lyr_OpenStreetMap_0.setVisible(true);lyr_texts_1.setVisible(true);lyr_inserts_2.setVisible(true);lyr_points_3.setVisible(true);lyr_texts_4.setVisible(true);lyr_B1copy_5.setVisible(true);lyr_B2copy_6.setVisible(true);lyr_B4copy_7.setVisible(true);lyr_B5copy_8.setVisible(true);lyr_B3copy_9.setVisible(true);lyr_B6copy_10.setVisible(true);lyr_B7copy_11.setVisible(true);lyr_B8copy_12.setVisible(true);lyr_B9copy_13.setVisible(true);lyr_B10copy_14.setVisible(true);lyr_B11copy_15.setVisible(true);lyr_B12copy_16.setVisible(true);lyr_B13copy_17.setVisible(true);lyr_B14copy_18.setVisible(true);lyr_LOT1BBDRYcopy_19.setVisible(true);lyr_LOT1ABDRYcopy_20.setVisible(true);lyr_TCTTRAIL_21.setVisible(true);lyr_H1_22.setVisible(true);lyr_CREEK_23.setVisible(true);lyr_TRAILPATH_24.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_JRFLOTAREA,group_ADJLOT,group_TANAYMOUNTAINBREEZ2OS,lyr_TCTTRAIL_21,lyr_H1_22,lyr_CREEK_23,lyr_TRAILPATH_24];
lyr_texts_1.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'height': 'height', 'text': 'text', 'angle': 'angle', 'widthscale': 'widthscale', 'oblique': 'oblique', 'style': 'style', 'textgen': 'textgen', 'alignh': 'alignh', 'alignv': 'alignv', 'interlin': 'interlin', });
lyr_inserts_2.set('fieldAliases', {});
lyr_points_3.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', });
lyr_texts_4.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'height': 'height', 'text': 'text', 'angle': 'angle', 'widthscale': 'widthscale', 'oblique': 'oblique', 'style': 'style', 'textgen': 'textgen', 'alignh': 'alignh', 'alignv': 'alignv', 'interlin': 'interlin', });
lyr_B1copy_5.set('fieldAliases', {'B1': 'B1', });
lyr_B2copy_6.set('fieldAliases', {'BLOCK 2': 'BLOCK 2', });
lyr_B4copy_7.set('fieldAliases', {'BLOCK 4': 'BLOCK 4', });
lyr_B5copy_8.set('fieldAliases', {'BLOCK 5': 'BLOCK 5', });
lyr_B3copy_9.set('fieldAliases', {'BLOCK 3': 'BLOCK 3', });
lyr_B6copy_10.set('fieldAliases', {'BLOCK 6': 'BLOCK 6', });
lyr_B7copy_11.set('fieldAliases', {'BLOCK 7': 'BLOCK 7', });
lyr_B8copy_12.set('fieldAliases', {'BLOCK 8': 'BLOCK 8', });
lyr_B9copy_13.set('fieldAliases', {'BLOCK 9': 'BLOCK 9', });
lyr_B10copy_14.set('fieldAliases', {'BLOCK 10': 'BLOCK 10', });
lyr_B11copy_15.set('fieldAliases', {'BLOCK 11': 'BLOCK 11', });
lyr_B12copy_16.set('fieldAliases', {'BLOCK 12': 'BLOCK 12', });
lyr_B13copy_17.set('fieldAliases', {'BLOCK 13': 'BLOCK 13', });
lyr_B14copy_18.set('fieldAliases', {'BLOCK 14': 'BLOCK 14', });
lyr_LOT1BBDRYcopy_19.set('fieldAliases', {'LOT1B-BDRY': 'LOT1B-BDRY', });
lyr_LOT1ABDRYcopy_20.set('fieldAliases', {'LOT1A-BDRY': 'LOT1A-BDRY', });
lyr_TCTTRAIL_21.set('fieldAliases', {'TCT TRAIL': 'TCT TRAIL', });
lyr_H1_22.set('fieldAliases', {'H-1': 'H-1', });
lyr_CREEK_23.set('fieldAliases', {'CREEK': 'CREEK', });
lyr_TRAILPATH_24.set('fieldAliases', {'TRAIL PATH': 'TRAIL PATH', });
lyr_texts_1.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparency': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'thickness': '', 'ext': '', 'height': '', 'text': '', 'angle': '', 'widthscale': '', 'oblique': '', 'style': '', 'textgen': '', 'alignh': '', 'alignv': '', 'interlin': '', });
lyr_inserts_2.set('fieldImages', {});
lyr_points_3.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparency': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'thickness': '', 'ext': '', });
lyr_texts_4.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparency': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'thickness': '', 'ext': '', 'height': '', 'text': '', 'angle': '', 'widthscale': '', 'oblique': '', 'style': '', 'textgen': '', 'alignh': '', 'alignv': '', 'interlin': '', });
lyr_B1copy_5.set('fieldImages', {'B1': 'TextEdit', });
lyr_B2copy_6.set('fieldImages', {'BLOCK 2': 'TextEdit', });
lyr_B4copy_7.set('fieldImages', {'BLOCK 4': 'TextEdit', });
lyr_B5copy_8.set('fieldImages', {'BLOCK 5': 'TextEdit', });
lyr_B3copy_9.set('fieldImages', {'BLOCK 3': 'TextEdit', });
lyr_B6copy_10.set('fieldImages', {'BLOCK 6': 'TextEdit', });
lyr_B7copy_11.set('fieldImages', {'BLOCK 7': 'TextEdit', });
lyr_B8copy_12.set('fieldImages', {'BLOCK 8': 'TextEdit', });
lyr_B9copy_13.set('fieldImages', {'BLOCK 9': 'TextEdit', });
lyr_B10copy_14.set('fieldImages', {'BLOCK 10': 'TextEdit', });
lyr_B11copy_15.set('fieldImages', {'BLOCK 11': 'TextEdit', });
lyr_B12copy_16.set('fieldImages', {'BLOCK 12': 'TextEdit', });
lyr_B13copy_17.set('fieldImages', {'BLOCK 13': 'TextEdit', });
lyr_B14copy_18.set('fieldImages', {'BLOCK 14': 'TextEdit', });
lyr_LOT1BBDRYcopy_19.set('fieldImages', {'LOT1B-BDRY': 'TextEdit', });
lyr_LOT1ABDRYcopy_20.set('fieldImages', {'LOT1A-BDRY': 'TextEdit', });
lyr_TCTTRAIL_21.set('fieldImages', {'TCT TRAIL': '', });
lyr_H1_22.set('fieldImages', {'H-1': '', });
lyr_CREEK_23.set('fieldImages', {'CREEK': 'TextEdit', });
lyr_TRAILPATH_24.set('fieldImages', {'TRAIL PATH': 'TextEdit', });
lyr_texts_1.set('fieldLabels', {'fid': 'inline label - always visible', 'handle': 'inline label - always visible', 'block': 'inline label - always visible', 'etype': 'inline label - always visible', 'space': 'inline label - always visible', 'layer': 'inline label - always visible', 'olinetype': 'inline label - always visible', 'linetype': 'inline label - always visible', 'color': 'inline label - always visible', 'ocolor': 'inline label - always visible', 'color24': 'inline label - always visible', 'transparency': 'inline label - always visible', 'lweight': 'inline label - always visible', 'linewidth': 'inline label - always visible', 'ltscale': 'inline label - always visible', 'visible': 'inline label - always visible', 'thickness': 'inline label - always visible', 'ext': 'inline label - always visible', 'height': 'inline label - always visible', 'text': 'inline label - always visible', 'angle': 'inline label - always visible', 'widthscale': 'inline label - always visible', 'oblique': 'inline label - always visible', 'style': 'inline label - always visible', 'textgen': 'inline label - always visible', 'alignh': 'inline label - always visible', 'alignv': 'inline label - always visible', 'interlin': 'inline label - always visible', });
lyr_inserts_2.set('fieldLabels', {});
lyr_points_3.set('fieldLabels', {'fid': 'inline label - always visible', 'handle': 'inline label - always visible', 'block': 'inline label - always visible', 'etype': 'inline label - always visible', 'space': 'inline label - always visible', 'layer': 'inline label - always visible', 'olinetype': 'inline label - always visible', 'linetype': 'inline label - always visible', 'color': 'inline label - always visible', 'ocolor': 'inline label - always visible', 'color24': 'inline label - always visible', 'transparency': 'inline label - always visible', 'lweight': 'inline label - always visible', 'linewidth': 'inline label - always visible', 'ltscale': 'inline label - always visible', 'visible': 'inline label - always visible', 'thickness': 'inline label - always visible', 'ext': 'inline label - always visible', });
lyr_texts_4.set('fieldLabels', {'fid': 'inline label - always visible', 'handle': 'inline label - always visible', 'block': 'inline label - always visible', 'etype': 'inline label - always visible', 'space': 'inline label - always visible', 'layer': 'inline label - always visible', 'olinetype': 'inline label - always visible', 'linetype': 'inline label - always visible', 'color': 'inline label - always visible', 'ocolor': 'inline label - always visible', 'color24': 'inline label - always visible', 'transparency': 'inline label - always visible', 'lweight': 'inline label - always visible', 'linewidth': 'inline label - always visible', 'ltscale': 'inline label - always visible', 'visible': 'inline label - always visible', 'thickness': 'inline label - always visible', 'ext': 'inline label - always visible', 'height': 'inline label - always visible', 'text': 'inline label - always visible', 'angle': 'inline label - always visible', 'widthscale': 'inline label - always visible', 'oblique': 'inline label - always visible', 'style': 'inline label - always visible', 'textgen': 'inline label - always visible', 'alignh': 'inline label - always visible', 'alignv': 'inline label - always visible', 'interlin': 'inline label - always visible', });
lyr_B1copy_5.set('fieldLabels', {'B1': 'inline label - always visible', });
lyr_B2copy_6.set('fieldLabels', {'BLOCK 2': 'inline label - always visible', });
lyr_B4copy_7.set('fieldLabels', {'BLOCK 4': 'inline label - always visible', });
lyr_B5copy_8.set('fieldLabels', {'BLOCK 5': 'inline label - always visible', });
lyr_B3copy_9.set('fieldLabels', {'BLOCK 3': 'inline label - always visible', });
lyr_B6copy_10.set('fieldLabels', {'BLOCK 6': 'inline label - always visible', });
lyr_B7copy_11.set('fieldLabels', {'BLOCK 7': 'inline label - always visible', });
lyr_B8copy_12.set('fieldLabels', {'BLOCK 8': 'inline label - always visible', });
lyr_B9copy_13.set('fieldLabels', {'BLOCK 9': 'inline label - always visible', });
lyr_B10copy_14.set('fieldLabels', {'BLOCK 10': 'inline label - always visible', });
lyr_B11copy_15.set('fieldLabels', {'BLOCK 11': 'inline label - always visible', });
lyr_B12copy_16.set('fieldLabels', {'BLOCK 12': 'inline label - always visible', });
lyr_B13copy_17.set('fieldLabels', {'BLOCK 13': 'inline label - always visible', });
lyr_B14copy_18.set('fieldLabels', {'BLOCK 14': 'inline label - always visible', });
lyr_LOT1BBDRYcopy_19.set('fieldLabels', {'LOT1B-BDRY': 'inline label - always visible', });
lyr_LOT1ABDRYcopy_20.set('fieldLabels', {'LOT1A-BDRY': 'inline label - always visible', });
lyr_TCTTRAIL_21.set('fieldLabels', {'TCT TRAIL': 'inline label - always visible', });
lyr_H1_22.set('fieldLabels', {'H-1': 'inline label - always visible', });
lyr_CREEK_23.set('fieldLabels', {'CREEK': 'inline label - always visible', });
lyr_TRAILPATH_24.set('fieldLabels', {'TRAIL PATH': 'inline label - always visible', });
lyr_TRAILPATH_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});