var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_manzanas_1 = new ol.format.GeoJSON();
var features_manzanas_1 = format_manzanas_1.readFeatures(json_manzanas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manzanas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manzanas_1.addFeatures(features_manzanas_1);
var lyr_manzanas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_manzanas_1, 
                style: style_manzanas_1,
                interactive: true,
                title: '<img src="styles/legend/manzanas_1.png" /> manzanas'
            });
var format_microrredes_2 = new ol.format.GeoJSON();
var features_microrredes_2 = format_microrredes_2.readFeatures(json_microrredes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_microrredes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_microrredes_2.addFeatures(features_microrredes_2);
var lyr_microrredes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_microrredes_2, 
                style: style_microrredes_2,
                interactive: true,
                title: '<img src="styles/legend/microrredes_2.png" /> microrredes'
            });
var format_poligono_3 = new ol.format.GeoJSON();
var features_poligono_3 = format_poligono_3.readFeatures(json_poligono_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_poligono_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poligono_3.addFeatures(features_poligono_3);
var lyr_poligono_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_poligono_3, 
                style: style_poligono_3,
                interactive: true,
                title: '<img src="styles/legend/poligono_3.png" /> poligono'
            });

lyr_OSMStandard_0.setVisible(true);lyr_manzanas_1.setVisible(true);lyr_microrredes_2.setVisible(true);lyr_poligono_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_manzanas_1,lyr_microrredes_2,lyr_poligono_3];
lyr_manzanas_1.set('fieldAliases', {'gidman': 'gidman', 'gidsec': 'gidsec', 'codmancat': 'codmancat', 'idtipman': 'idtipman', 'codmzhu': 'codmzhu', 'desmza': 'desmza', 'aream2': 'aream2', 'periml': 'periml', 'objectid': 'objectid', 'st_area_th': 'st_area_th', 'st_length_': 'st_length_', });
lyr_microrredes_2.set('fieldAliases', {'Id': 'Id', 'N_microrre': 'N_microrre', });
lyr_poligono_3.set('fieldAliases', {'Name': 'Name', });
lyr_manzanas_1.set('fieldImages', {'gidman': 'TextEdit', 'gidsec': 'TextEdit', 'codmancat': 'TextEdit', 'idtipman': 'TextEdit', 'codmzhu': 'TextEdit', 'desmza': 'TextEdit', 'aream2': 'Range', 'periml': 'Range', 'objectid': 'TextEdit', 'st_area_th': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_microrredes_2.set('fieldImages', {'Id': 'Range', 'N_microrre': 'Range', });
lyr_poligono_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_manzanas_1.set('fieldLabels', {'gidman': 'no label', 'gidsec': 'no label', 'codmancat': 'no label', 'idtipman': 'no label', 'codmzhu': 'no label', 'desmza': 'no label', 'aream2': 'no label', 'periml': 'no label', 'objectid': 'no label', 'st_area_th': 'no label', 'st_length_': 'no label', });
lyr_microrredes_2.set('fieldLabels', {'Id': 'no label', 'N_microrre': 'no label', });
lyr_poligono_3.set('fieldLabels', {'Name': 'no label', });
lyr_poligono_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});