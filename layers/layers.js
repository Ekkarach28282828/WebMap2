var wms_layers = [];


        var lyr_GoogleStreetmap_0 = new ol.layer.Tile({
            'title': 'Google Street map',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Googlesetetlite_2 = new ol.layer.Tile({
            'title': 'Googlesetetlite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KMSTON_2044_3 = new ol.format.GeoJSON();
var features_KMSTON_2044_3 = format_KMSTON_2044_3.readFeatures(json_KMSTON_2044_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KMSTON_2044_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KMSTON_2044_3.addFeatures(features_KMSTON_2044_3);
var lyr_KMSTON_2044_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KMSTON_2044_3, 
                style: style_KMSTON_2044_3,
                popuplayertitle: "KMSTON_2044",
                interactive: true,
                title: '<img src="styles/legend/KMSTON_2044_3.png" /> KMSTON_2044'
            });
var format_2044_Raod_4 = new ol.format.GeoJSON();
var features_2044_Raod_4 = format_2044_Raod_4.readFeatures(json_2044_Raod_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2044_Raod_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2044_Raod_4.addFeatures(features_2044_Raod_4);
var lyr_2044_Raod_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2044_Raod_4, 
                style: style_2044_Raod_4,
                popuplayertitle: "2044_Raod",
                interactive: true,
                title: '<img src="styles/legend/2044_Raod_4.png" /> 2044_Raod'
            });
var format_LIGHT_2044_5 = new ol.format.GeoJSON();
var features_LIGHT_2044_5 = format_LIGHT_2044_5.readFeatures(json_LIGHT_2044_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIGHT_2044_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIGHT_2044_5.addFeatures(features_LIGHT_2044_5);
var lyr_LIGHT_2044_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIGHT_2044_5, 
                style: style_LIGHT_2044_5,
                popuplayertitle: "LIGHT_2044",
                interactive: true,
                title: '<img src="styles/legend/LIGHT_2044_5.png" /> LIGHT_2044'
            });
var format_Tranfromer_2044_6 = new ol.format.GeoJSON();
var features_Tranfromer_2044_6 = format_Tranfromer_2044_6.readFeatures(json_Tranfromer_2044_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tranfromer_2044_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tranfromer_2044_6.addFeatures(features_Tranfromer_2044_6);cluster_Tranfromer_2044_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Tranfromer_2044_6
});
var lyr_Tranfromer_2044_6 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Tranfromer_2044_6, 
                style: style_Tranfromer_2044_6,
                popuplayertitle: "Tranfromer_2044",
                interactive: true,
                title: '<img src="styles/legend/Tranfromer_2044_6.png" /> Tranfromer_2044'
            });
var format_Bridge_7 = new ol.format.GeoJSON();
var features_Bridge_7 = format_Bridge_7.readFeatures(json_Bridge_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bridge_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bridge_7.addFeatures(features_Bridge_7);
var lyr_Bridge_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bridge_7, 
                style: style_Bridge_7,
                popuplayertitle: "Bridge",
                interactive: true,
                title: '<img src="styles/legend/Bridge_7.png" /> Bridge'
            });
var group_MAP = new ol.layer.Group({
                                layers: [lyr_GoogleStreetmap_0,lyr_GoogleMaps_1,lyr_Googlesetetlite_2,],
                                title: "MAP"});

lyr_GoogleStreetmap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_Googlesetetlite_2.setVisible(true);lyr_KMSTON_2044_3.setVisible(true);lyr_2044_Raod_4.setVisible(true);lyr_LIGHT_2044_5.setVisible(true);lyr_Tranfromer_2044_6.setVisible(true);lyr_Bridge_7.setVisible(true);
var layersList = [group_MAP,lyr_KMSTON_2044_3,lyr_2044_Raod_4,lyr_LIGHT_2044_5,lyr_Tranfromer_2044_6,lyr_Bridge_7];
lyr_KMSTON_2044_3.set('fieldAliases', {'RC_LNUM': 'RC_LNUM', });
lyr_2044_Raod_4.set('fieldAliases', {'LAYER': 'LAYER', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH': 'LENGTH', 'HIGHTWAY_': 'HIGHTWAY_', 'HIGHTWAY_I': 'HIGHTWAY_I', 'RC_LTYPE': 'RC_LTYPE', 'RC_LNUM': 'RC_LNUM', 'RC_ITNUM': 'RC_ITNUM', 'RC_HWTYPE': 'RC_HWTYPE', });
lyr_LIGHT_2044_5.set('fieldAliases', {'NUM_H': 'NUM_H', 'NAM_SEC': 'NAM_SEC', 'STA': 'STA', 'TYPE': 'TYPE', 'LANE': 'LANE', });
lyr_Tranfromer_2044_6.set('fieldAliases', {'NO': 'NO', 'Highway': 'Highway', 'NAM_SECTIO': 'NAM_SECTIO', 'STA': 'STA', 'Type': 'Type', 'LANE': 'LANE', 'LAT': 'LAT', 'LON': 'LON', 'REMARK': 'REMARK', });
lyr_Bridge_7.set('fieldAliases', {'Highway_Nu': 'Highway_Nu', 'Contron_Nu': 'Contron_Nu', 'KM_Strat': 'KM_Strat', 'KM_End': 'KM_End', 'Bridger_Na': 'Bridger_Na', 'Y': 'Y', 'X': 'X', 'Remark': 'Remark', 'auxiliary_': 'auxiliary_', 'auxiliar_1': 'auxiliar_1', 'auxiliar_2': 'auxiliar_2', 'auxiliar_3': 'auxiliar_3', 'auxiliar_4': 'auxiliar_4', 'auxiliar_5': 'auxiliar_5', 'auxiliar_6': 'auxiliar_6', 'auxiliar_7': 'auxiliar_7', 'auxiliar_8': 'auxiliar_8', 'auxiliar_9': 'auxiliar_9', 'auxiliar10': 'auxiliar10', 'auxiliar11': 'auxiliar11', 'auxiliar12': 'auxiliar12', 'auxiliar13': 'auxiliar13', 'auxiliar14': 'auxiliar14', 'auxiliar15': 'auxiliar15', 'auxiliar16': 'auxiliar16', 'auxiliar17': 'auxiliar17', 'auxiliar18': 'auxiliar18', 'auxiliar19': 'auxiliar19', 'auxiliar20': 'auxiliar20', 'auxiliar21': 'auxiliar21', 'auxiliar22': 'auxiliar22', 'auxiliar23': 'auxiliar23', 'auxiliar24': 'auxiliar24', });
lyr_KMSTON_2044_3.set('fieldImages', {'RC_LNUM': 'Range', });
lyr_2044_Raod_4.set('fieldImages', {'LAYER': 'TextEdit', 'FNODE_': 'Range', 'TNODE_': 'Range', 'LPOLY_': 'Range', 'RPOLY_': 'Range', 'LENGTH': 'TextEdit', 'HIGHTWAY_': 'Range', 'HIGHTWAY_I': 'Range', 'RC_LTYPE': 'Range', 'RC_LNUM': 'Range', 'RC_ITNUM': 'TextEdit', 'RC_HWTYPE': 'Range', });
lyr_LIGHT_2044_5.set('fieldImages', {'NUM_H': 'TextEdit', 'NAM_SEC': 'TextEdit', 'STA': 'TextEdit', 'TYPE': 'TextEdit', 'LANE': 'TextEdit', });
lyr_Tranfromer_2044_6.set('fieldImages', {'NO': 'TextEdit', 'Highway': 'TextEdit', 'NAM_SECTIO': 'TextEdit', 'STA': 'TextEdit', 'Type': 'TextEdit', 'LANE': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_Bridge_7.set('fieldImages', {'Highway_Nu': 'TextEdit', 'Contron_Nu': 'TextEdit', 'KM_Strat': 'TextEdit', 'KM_End': 'TextEdit', 'Bridger_Na': 'TextEdit', 'Y': 'TextEdit', 'X': 'TextEdit', 'Remark': 'TextEdit', 'auxiliary_': 'TextEdit', 'auxiliar_1': 'TextEdit', 'auxiliar_2': 'TextEdit', 'auxiliar_3': 'TextEdit', 'auxiliar_4': 'TextEdit', 'auxiliar_5': 'TextEdit', 'auxiliar_6': 'TextEdit', 'auxiliar_7': 'TextEdit', 'auxiliar_8': 'TextEdit', 'auxiliar_9': 'TextEdit', 'auxiliar10': 'TextEdit', 'auxiliar11': 'TextEdit', 'auxiliar12': 'TextEdit', 'auxiliar13': 'TextEdit', 'auxiliar14': 'TextEdit', 'auxiliar15': 'TextEdit', 'auxiliar16': 'TextEdit', 'auxiliar17': 'TextEdit', 'auxiliar18': 'TextEdit', 'auxiliar19': 'TextEdit', 'auxiliar20': 'TextEdit', 'auxiliar21': 'TextEdit', 'auxiliar22': 'TextEdit', 'auxiliar23': 'TextEdit', 'auxiliar24': 'TextEdit', });
lyr_KMSTON_2044_3.set('fieldLabels', {'RC_LNUM': 'inline label - always visible', });
lyr_2044_Raod_4.set('fieldLabels', {'LAYER': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH': 'no label', 'HIGHTWAY_': 'no label', 'HIGHTWAY_I': 'no label', 'RC_LTYPE': 'no label', 'RC_LNUM': 'no label', 'RC_ITNUM': 'no label', 'RC_HWTYPE': 'no label', });
lyr_LIGHT_2044_5.set('fieldLabels', {'NUM_H': 'no label', 'NAM_SEC': 'no label', 'STA': 'no label', 'TYPE': 'no label', 'LANE': 'no label', });
lyr_Tranfromer_2044_6.set('fieldLabels', {'NO': 'no label', 'Highway': 'no label', 'NAM_SECTIO': 'no label', 'STA': 'no label', 'Type': 'no label', 'LANE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'REMARK': 'no label', });
lyr_Bridge_7.set('fieldLabels', {'Highway_Nu': 'no label', 'Contron_Nu': 'no label', 'KM_Strat': 'no label', 'KM_End': 'no label', 'Bridger_Na': 'no label', 'Y': 'no label', 'X': 'no label', 'Remark': 'no label', 'auxiliary_': 'no label', 'auxiliar_1': 'no label', 'auxiliar_2': 'no label', 'auxiliar_3': 'no label', 'auxiliar_4': 'no label', 'auxiliar_5': 'no label', 'auxiliar_6': 'no label', 'auxiliar_7': 'no label', 'auxiliar_8': 'no label', 'auxiliar_9': 'no label', 'auxiliar10': 'no label', 'auxiliar11': 'no label', 'auxiliar12': 'no label', 'auxiliar13': 'no label', 'auxiliar14': 'no label', 'auxiliar15': 'no label', 'auxiliar16': 'no label', 'auxiliar17': 'no label', 'auxiliar18': 'no label', 'auxiliar19': 'no label', 'auxiliar20': 'no label', 'auxiliar21': 'no label', 'auxiliar22': 'no label', 'auxiliar23': 'no label', 'auxiliar24': 'no label', });
lyr_Bridge_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});