var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var StaticData;
(function (StaticData) {
    var Messages;
    (function (Messages) {
        var MESSAGES = {
            "NumPositives": "Charge(+)",
            "NumNegatives": "Charge(-)",
            "MinRadius": "Radius",
            "MinFreeRadius": "Free Radius",
            /* Tooltips data */
            "tooltip-MinRadius": "Radius of sphere within channel limited by three closest atoms",
            "tooltip-MinFreeRadius": "Radius of sphere within channel limited by three closest main chain atoms in order to allow sidechain flexibility",
            "tooltip-Bottleneck": "Radius of channel bottleneck",
            "tooltip-Length": "Length of the channel",
            "tooltip-Hydropathy": "Hydropathy index of amino acid according to Kyte and Doolittle J.Mol.Biol.(1982) 157, 105-132. Range from the most hydrophilic (Arg = -4.5) to the most hydrophobic (Ile = 4.5)",
            "tooltip-Hydrophobicity": "Normalized hydrophobicity scale by Cid et al. J. Protein Engineering (1992) 5, 373-375. Range from the most hydrophilic (Glu = -1.140) to the most hydrophobic (Ile = 1.810)",
            "tooltip-Polarity": "Lining amino acid polarity by Zimmermann et al. J. Theor. Biol. (1968) 21, 170-201. Polarity ranges from nonpolar (Ala, Gly = 0) tthrough polar (e.g. Ser = 1.67) to charged (Glu = 49.90, Arg = 52.00)",
            "tooltip-Mutability": "Relative mutability index by Jones, D.T. et al. Compur. Appl. Biosci. (1992) 8(3): 275-282. Realtive mutability based on empirical substitution matrices between similar protein sequences. High for easily substitutable amino acids, e.g. polars (Ser = 117, Thr = 107, Asn = 104) or aliphatics (Ala = 100, Val = 98, Ile = 103). Low for important structural amino acids, e.g. aromatics (Trp = 25, Phe = 51, Tyr = 50) or specials (Cys = 44, Pro = 58, Gly = 50).",
            "tooltip-agl-Hydropathy": "Average of hydropathy index per each amino acid according to Kyte and Doolittle J.Mol.Biol.(1982) 157, 105-132. Range from the most hydrophilic (Arg = -4.5) to the most hydrophobic (Ile = 4.5)",
            "tooltip-agl-Hydrophobicity": "Average of normalized hydrophobicity scales by Cid et al. J. Protein Engineering (1992) 5, 373-375. Range from the most hydrophilic (Glu = -1.140) to the most hydrophobic (Ile = 1.810)",
            "tooltip-agl-Polarity": "Average of lining amino acid polarities by Zimmermann et al. J. Theor. Biol. (1968) 21, 170-201. Polarity ranges from nonpolar (Ala, Gly = 0) tthrough polar (e.g. Ser = 1.67) to charged (Glu = 49.90, Arg = 52.00)",
            "tooltip-agl-Mutability": "Average of relative mutability index by Jones, D.T. et al. Compur. Appl. Biosci. (1992) 8(3): 275-282. Realtive mutability based on empirical substitution matrices between similar protein sequences. High for easily substitutable amino acids, e.g. polars (Ser = 117, Thr = 107, Asn = 104) or aliphatics (Ala = 100, Val = 98, Ile = 103). Low for important structural amino acids, e.g. aromatics (Trp = 25, Phe = 51, Tyr = 50) or specials (Cys = 44, Pro = 58, Gly = 50)."
        };
        function get(messageKey) {
            return MESSAGES[messageKey];
        }
        Messages.get = get;
    })(Messages = StaticData.Messages || (StaticData.Messages = {}));
})(StaticData || (StaticData = {}));
var DataInterface;
(function (DataInterface) {
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    ;
    function convertLayersToLayerData(layersObject) {
        var layersData = [];
        var layerCount = layersObject.LayersInfo.length;
        /*
        export interface LayerData{
        StartDistance: number,
        EndDistance: number,
        MinRadius: number,
        MinFreeRadius: number,
        Properties: any,
        Residues: any
        */
        for (var i = 0; i < layerCount; i++) {
            /*
            Hydrophobicity: number,
            Hydropathy: number,
            Polarity: number,
            Mutability: number
            */
            var properties = {
                Charge: layersObject.LayersInfo[i].Properties.Charge,
                NumPositives: layersObject.LayersInfo[i].Properties.NumPositives,
                NumNegatives: layersObject.LayersInfo[i].Properties.NumNegatives,
                Hydrophobicity: layersObject.LayerWeightedProperties.Hydrophobicity,
                Hydropathy: layersObject.LayerWeightedProperties.Hydropathy,
                Polarity: layersObject.LayerWeightedProperties.Polarity,
                Mutability: layersObject.LayerWeightedProperties.Mutability
            };
            layersData.push({
                StartDistance: layersObject.LayersInfo[i].LayerGeometry.StartDistance,
                EndDistance: layersObject.LayersInfo[i].LayerGeometry.EndDistance,
                MinRadius: layersObject.LayersInfo[i].LayerGeometry.MinRadius,
                MinFreeRadius: layersObject.LayersInfo[i].LayerGeometry.MinFreeRadius,
                Properties: layersObject.LayersInfo[i].Properties,
                Residues: layersObject.LayersInfo[i].Residues
            });
        }
        return layersData;
    }
    DataInterface.convertLayersToLayerData = convertLayersToLayerData;
    var Annotations;
    (function (Annotations) {
        ;
        ;
        ;
    })(Annotations = DataInterface.Annotations || (DataInterface.Annotations = {}));
})(DataInterface || (DataInterface = {}));
;
var Bridge;
(function (Bridge) {
    var Events = (function () {
        function Events() {
        }
        Events.subscribeChannelSelect = function (handler) {
            var hndlrs = this.handlers.get("ChannelSelect");
            if (hndlrs === void 0) {
                hndlrs = [];
            }
            hndlrs.push(handler);
            this.handlers.set("ChannelSelect", hndlrs);
        };
        Events.invokeChannelSelect = function (channelId) {
            var hndlrs = this.handlers.get("ChannelSelect");
            if (hndlrs === void 0) {
                return;
            }
            for (var _i = 0, hndlrs_1 = hndlrs; _i < hndlrs_1.length; _i++) {
                var h = hndlrs_1[_i];
                h(channelId);
            }
        };
        return Events;
    }());
    Events.handlers = new Map();
    Bridge.Events = Events;
})(Bridge || (Bridge = {}));
var CommonUtils;
(function (CommonUtils) {
    var Tunnels = (function () {
        function Tunnels() {
        }
        Tunnels.getLength = function (tunnel) {
            var len = tunnel.Layers.LayersInfo[tunnel.Layers.LayersInfo.length - 1].LayerGeometry.EndDistance;
            len = CommonUtils.Numbers.roundToDecimal(len, 1); //Math.round(len*10)/10;
            return len;
        };
        Tunnels.getBottleneck = function (tunnel) {
            var bneck = "<Unknown>";
            for (var _i = 0, _a = tunnel.Layers.LayersInfo; _i < _a.length; _i++) {
                var element = _a[_i];
                if (element.LayerGeometry.Bottleneck) {
                    var val = element.LayerGeometry.MinRadius;
                    bneck = (Math.round(val * 10) / 10).toString();
                    break;
                }
            }
            return bneck;
        };
        return Tunnels;
    }());
    CommonUtils.Tunnels = Tunnels;
})(CommonUtils || (CommonUtils = {}));
var CommonUtils;
(function (CommonUtils) {
    ;
    var Residues = (function () {
        function Residues() {
        }
        Residues.initCache = function () {
            if (this.cache !== void 0) {
                return;
            }
            this.cache = new Map();
        };
        Residues.getDirect = function (residueSeqNumber, plugin) {
            if (plugin.context.select('polymer-visual')[0].props !== void 0) {
                var props = plugin.context.select('polymer-visual')[0].props;
                if (props.model === void 0 || props.model.model === void 0) {
                    return "";
                }
                var model = props.model.model;
                var params = LiteMol.Core.Structure.Query.residuesById(residueSeqNumber).compile()(LiteMol.Core.Structure.Query.Context.ofStructure(model));
                var fragment = params.fragments[0];
                var residueInd = fragment.residueIndices[0];
                var residueData = params.context.structure.data.residues;
                var resIdx = residueData.indices[residueInd];
                var name_1 = residueData.name[resIdx];
                return name_1;
            }
            return "";
        };
        Residues.getName = function (residueSeqNumber, plugin) {
            this.initCache();
            if (this.cache.has(residueSeqNumber)) {
                var name_2 = this.cache.get(residueSeqNumber);
                if (name_2 === void 0) {
                    return "";
                }
                return name_2;
            }
            var name = this.getDirect(residueSeqNumber, plugin);
            this.cache.set(residueSeqNumber, name);
            return name;
        };
        Residues.sort = function (residues, groupFunction, hasName, includeBackbone) {
            if (includeBackbone === void 0) {
                includeBackbone = false;
            }
            if (hasName === void 0) {
                hasName = false;
            }
            if (residues.length === 0) {
                return residues;
            }
            var resParsed = this.parseResidues(residues, hasName);
            var groups = [];
            if (groupFunction !== void 0) {
                groups = groupFunction(resParsed);
            }
            else {
                groups.push(resParsed);
            }
            var sortFn = this.getSortFunction();
            var all = [];
            for (var _i = 0, groups_1 = groups; _i < groups_1.length; _i++) {
                var group = groups_1[_i];
                all = all.concat(group.sort(sortFn));
            }
            return all.map(function (val, idx, array) {
                if (hasName) {
                    return val.name + " " + val.authSeqNumber + " " + val.chain.authAsymId + ((includeBackbone && val.backbone) ? ' Backbone' : '');
                }
                else {
                    return val.authSeqNumber + " " + val.chain.authAsymId + ((includeBackbone && val.backbone) ? ' Backbone' : '');
                }
            });
        };
        Residues.parseResidue = function (residue) {
            return residue.split(" ");
        };
        Residues.parseResidues = function (residues, hasName) {
            if (hasName === void 0) {
                hasName = false;
            }
            var resParsed = [];
            for (var _i = 0, residues_1 = residues; _i < residues_1.length; _i++) {
                var residue = residues_1[_i];
                var residueParts = this.parseResidue(residue);
                if (hasName) {
                    resParsed.push({
                        chain: { authAsymId: residueParts[2] },
                        authSeqNumber: Number(residueParts[1]),
                        name: residueParts[0],
                        backbone: (residueParts.length === 4)
                    });
                }
                else {
                    resParsed.push({
                        chain: { authAsymId: residueParts[1] },
                        authSeqNumber: Number(residueParts[0]),
                        backbone: (residueParts.length === 3)
                    });
                }
            }
            return resParsed;
        };
        Residues.getSortFunction = function () {
            return function (a, b) {
                if (a.chain.authAsymId < b.chain.authAsymId) {
                    return -1;
                }
                else if (a.chain.authAsymId > b.chain.authAsymId) {
                    return 1;
                }
                else {
                    if (a.authSeqNumber === b.authSeqNumber) {
                        if (a.backbone && b.backbone) {
                            return 0;
                        }
                        else if (a.backbone && !b.backbone) {
                            return -1;
                        }
                        else {
                            return 1;
                        }
                    }
                    return a.authSeqNumber - b.authSeqNumber;
                }
            };
        };
        return Residues;
    }());
    CommonUtils.Residues = Residues;
})(CommonUtils || (CommonUtils = {}));
var CommonUtils;
(function (CommonUtils) {
    var Numbers = (function () {
        function Numbers() {
        }
        Numbers.roundToDecimal = function (number, numOfDecimals) {
            if (number.toString().indexOf(".") <= 0 && number.toString().indexOf(",") <= 0) {
                return number;
            }
            var dec = Math.pow(10, numOfDecimals);
            return Math.round(number * dec) / dec;
        };
        return Numbers;
    }());
    CommonUtils.Numbers = Numbers;
})(CommonUtils || (CommonUtils = {}));
var CommonUtils;
(function (CommonUtils) {
    var Selection;
    (function (Selection) {
        var Transformer = LiteMol.Bootstrap.Entity.Transformer;
        ;
        ;
        ;
        ;
        ;
        var SelectionHelper = (function () {
            function SelectionHelper() {
            }
            SelectionHelper.attachOnResidueSelectHandler = function (handler) {
                if (this.onResidueSelectHandlers === void 0) {
                    this.onResidueSelectHandlers = [];
                }
                this.onResidueSelectHandlers.push({ handler: handler });
            };
            SelectionHelper.invokeOnResidueSelectHandlers = function (residue) {
                if (this.onResidueSelectHandlers === void 0) {
                    return;
                }
                for (var _i = 0, _a = this.onResidueSelectHandlers; _i < _a.length; _i++) {
                    var h = _a[_i];
                    h.handler(residue);
                }
            };
            SelectionHelper.attachOnResidueLightSelectHandler = function (handler) {
                if (this.onResidueLightSelectHandlers === void 0) {
                    this.onResidueLightSelectHandlers = [];
                }
                this.onResidueLightSelectHandlers.push({ handler: handler });
            };
            SelectionHelper.invokeOnResidueLightSelectHandlers = function (residue) {
                if (this.onResidueLightSelectHandlers === void 0) {
                    return;
                }
                for (var _i = 0, _a = this.onResidueLightSelectHandlers; _i < _a.length; _i++) {
                    var h = _a[_i];
                    h.handler(residue);
                }
            };
            SelectionHelper.attachOnResidueBulkSelectHandler = function (handler) {
                if (this.onResidueBulkSelectHandlers === void 0) {
                    this.onResidueBulkSelectHandlers = [];
                }
                this.onResidueBulkSelectHandlers.push({ handler: handler });
            };
            SelectionHelper.invokeOnResidueBulkSelectHandlers = function (residues) {
                if (this.onResidueBulkSelectHandlers === void 0) {
                    return;
                }
                for (var _i = 0, _a = this.onResidueBulkSelectHandlers; _i < _a.length; _i++) {
                    var h = _a[_i];
                    h.handler(residues);
                }
            };
            SelectionHelper.attachOnClearSelectionHandler = function (handler) {
                if (this.onClearSelectionHandlers === void 0) {
                    this.onClearSelectionHandlers = [];
                }
                this.onClearSelectionHandlers.push({ handler: handler });
            };
            SelectionHelper.invokeOnClearSelectionHandlers = function () {
                if (this.onClearSelectionHandlers === void 0) {
                    return;
                }
                for (var _i = 0, _a = this.onClearSelectionHandlers; _i < _a.length; _i++) {
                    var h = _a[_i];
                    h.handler();
                }
            };
            SelectionHelper.attachOnChannelSelectHandler = function (handler) {
                if (this.onChannelSelectHandlers === void 0) {
                    this.onChannelSelectHandlers = [];
                }
                this.onChannelSelectHandlers.push({ handler: handler });
            };
            SelectionHelper.invokeOnChannelSelectHandlers = function (data) {
                if (this.onChannelSelectHandlers === void 0) {
                    return;
                }
                for (var _i = 0, _a = this.onChannelSelectHandlers; _i < _a.length; _i++) {
                    var h = _a[_i];
                    h.handler(data);
                }
            };
            SelectionHelper.attachOnChannelDeselectHandler = function (handler) {
                if (this.onChannelDeselectHandlers === void 0) {
                    this.onChannelDeselectHandlers = [];
                }
                this.onChannelDeselectHandlers.push({ handler: handler });
            };
            SelectionHelper.invokeOnChannelDeselectHandlers = function () {
                if (this.onChannelDeselectHandlers === void 0) {
                    return;
                }
                for (var _i = 0, _a = this.onChannelDeselectHandlers; _i < _a.length; _i++) {
                    var h = _a[_i];
                    h.handler();
                }
            };
            SelectionHelper.getSelectionVisualRef = function () {
                return this.SELECTION_VISUAL_REF;
            };
            SelectionHelper.getAltSelectionVisualRef = function () {
                return this.SELECTION_ALT_VISUAL_REF;
            };
            SelectionHelper.clearSelection = function (plugin) {
                this.clearSelectionPrivate(plugin);
                this.selectedBulkResidues = void 0;
                this.selectedResidue = void 0;
                this.selectedChannelRef = void 0;
                this.selectedChannelData = void 0;
                this.resetScene(plugin);
            };
            SelectionHelper.clearSelectionPrivate = function (plugin) {
                LiteMol.Bootstrap.Command.Tree.RemoveNode.dispatch(plugin.context, this.SELECTION_VISUAL_REF);
                if (this.selectedChannelRef !== void 0) {
                    deselectTunnelByRef(plugin, this.selectedChannelRef);
                }
                setTimeout(function () { return LiteMol.Bootstrap.Event.Visual.VisualSelectElement.dispatch(plugin.context, LiteMol.Bootstrap.Interactivity.Info.empty); }, 0);
                this.clearAltSelection(plugin);
                this.invokeOnClearSelectionHandlers();
            };
            SelectionHelper.clearAltSelection = function (plugin) {
                LiteMol.Bootstrap.Command.Tree.RemoveNode.dispatch(plugin.context, this.SELECTION_ALT_VISUAL_REF);
            };
            SelectionHelper.resetScene = function (plugin) {
                LiteMol.Bootstrap.Command.Visual.ResetScene.dispatch(plugin.context, void 0);
            };
            SelectionHelper.chainEquals = function (c1, c2) {
                if ((c1.asymId !== c2.asymId)
                    || (c1.authAsymId !== c2.authAsymId)
                    || (c1.index !== c2.index)) {
                    return false;
                }
                return true;
            };
            SelectionHelper.residueEquals = function (r1, r2) {
                if (r1 === void 0 && r2 === void 0) {
                    return true;
                }
                if (r1 === void 0 || r2 === void 0) {
                    return false;
                }
                if ((r1.authName !== r2.authName)
                    || (r1.authSeqNumber !== r2.authSeqNumber)
                    || (!this.chainEquals(r1.chain, r2.chain))
                    || (r1.index !== r2.index)
                    || (r1.insCode !== r2.insCode)
                    || (r1.isHet !== r2.isHet)
                    || (r1.name !== r2.name)
                    || (r1.seqNumber !== r2.seqNumber)) {
                    return false;
                }
                return true;
            };
            SelectionHelper.residueBulkSort = function (bulk) {
                bulk.sort(function (a, b) {
                    if (a.chain.authAsymId < b.chain.authAsymId) {
                        return -1;
                    }
                    else if (a.chain.authAsymId == b.chain.authAsymId) {
                        return a.authSeqNumber - b.authSeqNumber;
                    }
                    else {
                        return 1;
                    }
                });
            };
            SelectionHelper.residueBulkEquals = function (r1, r2) {
                if (r1.length !== r2.length) {
                    return false;
                }
                this.residueBulkSort(r1);
                this.residueBulkSort(r2);
                for (var idx = 0; idx < r1.length; idx++) {
                    if (this.residueLightEquals({ type: "light", info: r1[idx] }, { type: "light", info: r2[idx] })) {
                        return false;
                    }
                }
                return true;
            };
            SelectionHelper.selectResiduesBulkWithBallsAndSticks = function (plugin, residues) {
                CommonUtils.Selection.SelectionHelper.clearSelectionPrivate(plugin);
                this.selectedChannelRef = void 0;
                this.selectedChannelData = void 0;
                this.selectedBulkResidues = void 0;
                this.resetScene(plugin);
                if (this.selectedBulkResidues !== void 0) {
                    if (this.residueBulkEquals(residues, this.selectedBulkResidues)) {
                        this.selectedResidue = undefined;
                        return;
                    }
                }
                var queries = [];
                for (var _i = 0, residues_2 = residues; _i < residues_2.length; _i++) {
                    var residue = residues_2[_i];
                    queries.push((_a = LiteMol.Core.Structure.Query).chainsById.apply(_a, [residue.chain.authAsymId]).intersectWith((_b = LiteMol.Core.Structure.Query).residues.apply(_b, [{ authSeqNumber: residue.authSeqNumber }])).compile());
                }
                var query = (_c = LiteMol.Core.Structure.Query).or.apply(_c, queries);
                var t = plugin.createTransform();
                t.add('polymer-visual', Transformer.Molecule.CreateSelectionFromQuery, { query: query, name: 'Residues' }, { ref: CommonUtils.Selection.SelectionHelper.getSelectionVisualRef(), isHidden: true })
                    .then(Transformer.Molecule.CreateVisual, { style: LiteMol.Bootstrap.Visualization.Molecule.Default.ForType.get('BallsAndSticks') }, { isHidden: true });
                plugin.applyTransform(t)
                    .then(function () {
                    LiteMol.Bootstrap.Command.Entity.Focus.dispatch(plugin.context, plugin.context.select(CommonUtils.Selection.SelectionHelper.getSelectionVisualRef()));
                });
                this.selectedBulkResidues = residues;
                this.invokeOnResidueBulkSelectHandlers(residues);
                var _a, _b, _c;
            };
            SelectionHelper.isBulkResiduesSelected = function (residues) {
                return this.selectedBulkResidues !== void 0;
            };
            SelectionHelper.selectResidueByAuthAsymIdAndAuthSeqNumberWithBallsAndSticks = function (plugin, residue) {
                var query = LiteMol.Core.Structure.Query.chainsById(residue.chain.authAsymId).intersectWith((_a = LiteMol.Core.Structure.Query).residues.apply(_a, [{ authSeqNumber: residue.authSeqNumber }]));
                CommonUtils.Selection.SelectionHelper.clearSelectionPrivate(plugin);
                this.selectedChannelRef = void 0;
                this.selectedChannelData = void 0;
                this.selectedBulkResidues = void 0;
                this.resetScene(plugin);
                if (this.selectedResidue !== void 0) {
                    if ((this.selectedResidue.type === "full" && this.residueLightEquals({ type: "light", info: residue }, this.residueToLight(this.selectedResidue)))
                        || (this.selectedResidue.type === "light" && this.residueLightEquals({ type: "light", info: residue }, this.selectedResidue))) {
                        this.selectedResidue = undefined;
                        return;
                    }
                }
                var t = plugin.createTransform();
                t.add('polymer-visual', Transformer.Molecule.CreateSelectionFromQuery, { query: query, name: 'Residues' }, { ref: CommonUtils.Selection.SelectionHelper.getSelectionVisualRef(), isHidden: true })
                    .then(Transformer.Molecule.CreateVisual, { style: LiteMol.Bootstrap.Visualization.Molecule.Default.ForType.get('BallsAndSticks') }, { isHidden: true });
                plugin.applyTransform(t)
                    .then(function () {
                    LiteMol.Bootstrap.Command.Entity.Focus.dispatch(plugin.context, plugin.context.select(CommonUtils.Selection.SelectionHelper.getSelectionVisualRef()));
                });
                this.selectedResidue = { type: "light", info: residue };
                this.invokeOnResidueLightSelectHandlers(residue);
                var _a;
            };
            SelectionHelper.residueToLight = function (residue) {
                return {
                    type: "light",
                    info: {
                        chain: residue.info.chain,
                        authSeqNumber: residue.info.authSeqNumber
                    }
                };
            };
            SelectionHelper.residueLightEquals = function (r1, r2) {
                if ((!this.chainLightEquals(r1.info.chain, r2.info.chain))
                    || r1.info.authSeqNumber !== r2.info.authSeqNumber) {
                    return false;
                }
                return true;
            };
            SelectionHelper.chainLightEquals = function (c1, c2) {
                return (c1.authAsymId === c2.authAsymId);
            };
            SelectionHelper.isSelectedAnyChannel = function () {
                return this.selectedChannelRef !== void 0;
            };
            SelectionHelper.isSelectedAny = function () {
                return this.isSelectedAnyChannel() || this.selectedResidue !== void 0 || this.selectedBulkResidues !== void 0;
            };
            SelectionHelper.selectResidueWithBallsAndSticks = function (plugin, residue) {
                var query = LiteMol.Core.Structure.Query.chainsById(residue.chain.asymId)
                    .intersectWith(LiteMol.Core.Structure.Query.residues(residue));
                CommonUtils.Selection.SelectionHelper.clearSelectionPrivate(plugin);
                this.selectedChannelRef = void 0;
                this.selectedChannelData = void 0;
                this.selectedBulkResidues = void 0;
                this.resetScene(plugin);
                if (this.selectedResidue !== void 0) {
                    if (this.isSelected(residue)) {
                        this.selectedResidue = undefined;
                        return;
                    }
                }
                var t = plugin.createTransform();
                t.add('polymer-visual', Transformer.Molecule.CreateSelectionFromQuery, { query: query, name: 'Residues' }, { ref: CommonUtils.Selection.SelectionHelper.getSelectionVisualRef(), isHidden: true })
                    .then(Transformer.Molecule.CreateVisual, { style: LiteMol.Bootstrap.Visualization.Molecule.Default.ForType.get('BallsAndSticks') }, { isHidden: true });
                plugin.applyTransform(t)
                    .then(function () {
                    LiteMol.Bootstrap.Command.Entity.Focus.dispatch(plugin.context, plugin.context.select(CommonUtils.Selection.SelectionHelper.getSelectionVisualRef()));
                });
                this.selectedResidue = { type: "full", info: residue };
                this.invokeOnResidueSelectHandlers(residue);
            };
            SelectionHelper.isSelected = function (residue) {
                return (this.selectedResidue !== void 0)
                    && ((this.selectedResidue.type === "full" && this.residueEquals(residue, this.selectedResidue.info))
                        || (this.selectedResidue.type === "light" && this.residueLightEquals(this.residueToLight({ type: "full", info: residue }), this.selectedResidue)));
            };
            SelectionHelper.isSelectedLight = function (residue) {
                return (this.selectedResidue !== void 0)
                    && ((this.selectedResidue.type === "full" && this.residueLightEquals({ type: "light", info: residue }, this.residueToLight(this.selectedResidue)))
                        || (this.selectedResidue.type === "light" && this.residueLightEquals({ type: "light", info: residue }, this.selectedResidue)));
            };
            SelectionHelper.getSelectedChannelData = function () {
                return (this.selectedChannelData === void 0) ? null : this.selectedChannelData;
            };
            SelectionHelper.getSelectedChannelRef = function () {
                return (this.selectedChannelRef === void 0) ? "" : this.selectedChannelRef;
            };
            SelectionHelper.attachClearSelectionToEventHandler = function (plugin) {
                var _this = this;
                this.interactionEventStream = LiteMol.Bootstrap.Event.Visual.VisualSelectElement.getStream(plugin.context)
                    .subscribe(function (e) { return _this.interactionHandler('select', e.data, plugin); });
            };
            SelectionHelper.interactionHandler = function (type, i, plugin) {
                //console.log("SelectionHelper: Caught-SelectEvent");
                if (!i || i.source == null || i.source.ref === void 0 || i.source.props === void 0 || i.source.props.tag === void 0) {
                    //console.log("SelectionHelper: Event incomplete - ignoring");
                    return;
                }
                if (this.selectedResidue !== void 0) {
                    //console.log("selected channel - clearing residues");
                    LiteMol.Bootstrap.Command.Tree.RemoveNode.dispatch(plugin.context, this.SELECTION_VISUAL_REF);
                    this.selectedResidue = void 0;
                    return;
                }
                if (this.selectedBulkResidues !== void 0) {
                    //console.log("selected channel - clearing residues");
                    LiteMol.Bootstrap.Command.Tree.RemoveNode.dispatch(plugin.context, this.SELECTION_VISUAL_REF);
                    this.selectedBulkResidues = void 0;
                    return;
                }
                if ((this.selectedChannelRef !== void 0) && (this.selectedChannelRef === i.source.ref)) {
                    //console.log("double clicked on tunel - deselecting");
                    this.clearSelectionPrivate(plugin);
                    this.selectedChannelRef = void 0;
                    this.selectedChannelData = void 0;
                    this.invokeOnChannelDeselectHandlers();
                    return;
                }
                else {
                    //console.log("Channel selected");
                    if (this.selectedChannelRef !== void 0 && this.selectedChannelRef !== i.source.ref) {
                        deselectTunnelByRef(plugin, this.selectedChannelRef);
                    }
                    this.selectedChannelRef = i.source.ref;
                    this.selectedChannelData = i.source.props.tag.element.Layers;
                    selectTunnelByRef(plugin, this.selectedChannelRef);
                    this.clearAltSelection(plugin);
                    this.invokeOnChannelSelectHandlers(this.selectedChannelData);
                    return;
                }
                //console.log("SelectionHelper: SelectEvent from code - ignoring ");
            };
            return SelectionHelper;
        }());
        SelectionHelper.SELECTION_VISUAL_REF = "res_visual";
        SelectionHelper.SELECTION_ALT_VISUAL_REF = "alt_res_visual";
        SelectionHelper.interactionEventStream = void 0;
        Selection.SelectionHelper = SelectionHelper;
        function getIndices(v) {
            if (v.props.model.surface === void 0) {
                return [];
            }
            return v.props.model.surface.triangleIndices;
        }
        function selectTunnelByRef(plugin, ref) {
            var entities = plugin.selectEntities(ref);
            var v = entities[0];
            if (LiteMol.Bootstrap.Entity.isVisual(entities[0]) && v.props.isSelectable) {
                v.props.model.applySelection(getIndices(v), 1 /* Select */);
            }
        }
        function deselectTunnelByRef(plugin, ref) {
            var entities = plugin.selectEntities(ref);
            var v = entities[0];
            if (LiteMol.Bootstrap.Entity.isVisual(entities[0]) && v.props.isSelectable) {
                v.props.model.applySelection(getIndices(v), 2 /* RemoveSelect */);
            }
        }
    })(Selection = CommonUtils.Selection || (CommonUtils.Selection = {}));
})(CommonUtils || (CommonUtils = {}));
var CommonUtils;
(function (CommonUtils) {
    var Tooltips;
    (function (Tooltips) {
        function getMessageOrLeaveText(text) {
            var message = StaticData.Messages.get(text);
            if (message === void 0) {
                return text;
            }
            return message;
        }
        Tooltips.getMessageOrLeaveText = getMessageOrLeaveText;
        function hasTooltipText(messageKey) {
            var message = StaticData.Messages.get("tooltip-" + messageKey);
            return (message !== void 0);
        }
        Tooltips.hasTooltipText = hasTooltipText;
    })(Tooltips = CommonUtils.Tooltips || (CommonUtils.Tooltips = {}));
})(CommonUtils || (CommonUtils = {}));
var CommonUtils;
(function (CommonUtils) {
    var Tabs;
    (function (Tabs) {
        function getTabLinkById(tabbedElementId, tabId) {
            var tabs = $("#" + tabbedElementId + " li a");
            for (var _i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
                var t = tabs_1[_i];
                if ($(t).attr('href') === "#" + tabbedElementId + "-" + tabId) {
                    return $(t);
                }
            }
        }
        Tabs.getTabLinkById = getTabLinkById;
        function isActive(tabbedElementId, tabId) {
            return getTabLinkById(tabbedElementId, tabId).parent().attr("class").indexOf("active") >= 0;
        }
        Tabs.isActive = isActive;
        function activateTab(tabbedElementId, tabId) {
            getTabLinkById(tabbedElementId, tabId).click();
        }
        Tabs.activateTab = activateTab;
        function doAfterTabActivated(tabbedElementId, tabId, callback) {
            var checker = function () {
                var link = getTabLinkById(tabbedElementId, tabId);
                var href = link.attr("href");
                if (link.parent().attr("class").indexOf("active") >= 0 && $(href).css("display") !== "none") {
                    callback();
                }
                else {
                    window.setTimeout(checker, 10);
                }
            };
            window.setTimeout(checker, 10);
        }
        Tabs.doAfterTabActivated = doAfterTabActivated;
    })(Tabs = CommonUtils.Tabs || (CommonUtils.Tabs = {}));
})(CommonUtils || (CommonUtils = {}));
var Annotation;
(function (Annotation) {
    var LiteMoleEvent = LiteMol.Bootstrap.Event;
    ;
    ;
    ;
    var AnnotationDataProvider = (function () {
        function AnnotationDataProvider() {
        }
        AnnotationDataProvider.isLining = function (residue) {
            return this.liningResidues.indexOf(residue) >= 0;
        };
        AnnotationDataProvider.parseChannelsData = function (data) {
            var map = LiteMol.Core.Utils.FastMap.create();
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var annotation = data_1[_i];
                var channelId = annotation.Id;
                if (channelId === null) {
                    console.log("Found channel annotation wihtout id. Skipping...");
                    continue;
                }
                var list = [];
                if (map.has(channelId)) {
                    var l = map.get(channelId);
                    if (l !== void 0) {
                        list = l;
                    }
                }
                list.push({
                    text: annotation.Name,
                    reference: annotation.Reference,
                    description: annotation.Description,
                    link: this.createLink(annotation.ReferenceType, annotation.Reference)
                });
                map.set(channelId, list);
            }
            return map;
        };
        AnnotationDataProvider.stripChars = function (str, chars) {
            for (var _i = 0, chars_1 = chars; _i < chars_1.length; _i++) {
                var char = chars_1[_i];
                str = str.replace(char, "");
            }
            return str;
        };
        AnnotationDataProvider.parseCatalytics = function (items) {
            var _this = this;
            var rv = [];
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                var line = item.replace(/\(\d*\)/g, function (x) { return "<sub>" + _this.stripChars(x, ['(', ')']) + "</sub>"; });
                line = line.replace(/\(\+\)|\(\-\)/g, function (x) { return "<sup>" + _this.stripChars(x, ['(', ')']) + "</sup>"; });
                rv.push(line);
            }
            return rv;
        };
        AnnotationDataProvider.parseProteinData = function (data) {
            var list = [];
            for (var _i = 0, data_2 = data; _i < data_2.length; _i++) {
                var item = data_2[_i];
                list.push({
                    name: item.Name,
                    function: item.Function,
                    link: this.createLink("UniProt", item.UniProtId),
                    uniProtId: item.UniProtId,
                    catalytics: this.parseCatalytics(item.Catalytics)
                });
            }
            return list;
        };
        //PUBMEDID vs UniProtId ??? PUBMED není v JSONU vůbec přítomné
        //link pro uniprot používá adresu http://www.uniprot.org/uniprot/
        AnnotationDataProvider.createLink = function (type, reference) {
            if (type === "DOI") {
                return "http://dx.doi.org/" + reference;
            }
            else if (type === "UniProt") {
                return "http://www.uniprot.org/uniprot/" + reference;
            }
            else if (type === "PubMed") {
                return "http://europepmc.org/abstract/MED/" + reference;
            }
            else {
                console.log("Unknown reference type " + type + " for reference " + reference);
                return "#unknown-reference-type";
            }
        };
        AnnotationDataProvider.parseResidueItem = function (item, map) {
            var residueId = item.Id + " " + item.Chain;
            var annotations = map.get(residueId);
            if (annotations === void 0) {
                annotations = [];
            }
            annotations.push({
                text: item.Text,
                reference: item.Reference,
                link: this.createLink(item.ReferenceType, item.Reference),
                isLining: this.isLining(residueId)
            });
            map.set(item.Id + " " + item.Chain, annotations);
        };
        AnnotationDataProvider.parseResidueData = function (data) {
            var map = LiteMol.Core.Utils.FastMap.create();
            for (var _i = 0, _a = data.ChannelsDB; _i < _a.length; _i++) {
                var item = _a[_i];
                this.parseResidueItem(item, map);
            }
            for (var _b = 0, _c = data.UniProt; _b < _c.length; _b++) {
                var item = _c[_b];
                this.parseResidueItem(item, map);
            }
            return map;
        };
        AnnotationDataProvider.parseLiningResidues = function (data) {
            var channels = [];
            if (data.Channels.ReviewedChannels !== void 0) {
                channels = channels.concat(data.Channels.ReviewedChannels);
            }
            if (data.Channels.CSATunnels !== void 0) {
                channels = channels.concat(data.Channels.CSATunnels);
            }
            if (data.Channels.TransmembranePores !== void 0) {
                channels = channels.concat(data.Channels.TransmembranePores);
            }
            if (data.Channels.CofactorTunnels !== void 0) {
                channels = channels.concat(data.Channels.CofactorTunnels);
            }
            var liningResidues = [];
            for (var _i = 0, channels_1 = channels; _i < channels_1.length; _i++) {
                var channel = channels_1[_i];
                for (var _a = 0, _b = channel.Layers.LayersInfo; _a < _b.length; _a++) {
                    var layerInfo = _b[_a];
                    for (var _c = 0, _d = layerInfo.Residues; _c < _d.length; _c++) {
                        var residue = _d[_c];
                        var residueId = residue.split(" ").slice(1, 3).join(" ");
                        if (liningResidues.indexOf(residueId) < 0) {
                            liningResidues.push(residueId);
                        }
                    }
                }
            }
            return liningResidues;
        };
        AnnotationDataProvider.isDataReady = function () {
            return this.dataReady;
        };
        AnnotationDataProvider.handleChannelsAPIData = function (data) {
            var liningResidues = this.parseLiningResidues(data);
            var channelsData = this.parseChannelsData(data.Annotations);
            return { liningResidues: liningResidues, channelsData: channelsData };
        };
        AnnotationDataProvider.handleAnnotationsAPIData = function (data) {
            var proteinData = this.parseProteinData(data.EntryAnnotations);
            var residueData = this.parseResidueData(data.ResidueAnnotations);
            return { proteinData: proteinData, residueData: residueData };
        };
        AnnotationDataProvider.subscribeToPluginContext = function (context) {
            var _this = this;
            var channelsAPIobserver;
            var annotationsAPIobserver;
            new Promise(function (res, rej) {
                var moleData = context.select("mole-data")[0];
                if (moleData !== void 0) {
                    res(_this.handleChannelsAPIData(moleData.props.data));
                }
                else {
                    channelsAPIobserver = LiteMoleEvent.Tree.NodeAdded.getStream(context).subscribe(function (e) {
                        if (e.data.tree !== void 0 && e.data.ref === "mole-data") {
                            res(_this.handleChannelsAPIData(e.data.props.data));
                        }
                    });
                }
            }).then(function (val) {
                if (channelsAPIobserver !== void 0) {
                    channelsAPIobserver.dispose();
                }
                var item = val;
                _this.liningResidues = item.liningResidues;
                _this.channelAnnotations = item.channelsData;
                new Promise(function (res, rej) {
                    var annotationData = context.select("channelsDB-annotation-data")[0];
                    if (annotationData !== void 0) {
                        res(_this.handleAnnotationsAPIData(annotationData.props.data));
                    }
                    else {
                        annotationsAPIobserver = LiteMoleEvent.Tree.NodeAdded.getStream(context).subscribe(function (e) {
                            if (e.data.tree !== void 0 && e.data.ref === "channelsDB-annotation-data") {
                                res(_this.handleAnnotationsAPIData(e.data.props.data));
                            }
                        });
                    }
                }).then(function (val) {
                    if (annotationsAPIobserver !== void 0) {
                        annotationsAPIobserver.dispose();
                    }
                    var item = val;
                    _this.proteinAnnotations = item.proteinData;
                    _this.residueAnnotations = item.residueData;
                    _this.dataReady = true;
                    _this.invokeHandlers();
                })
                    .catch(function (err) {
                    console.log("annotationsAPIParseError:");
                    console.log(err);
                    if (annotationsAPIobserver !== void 0) {
                        annotationsAPIobserver.dispose();
                    }
                    if (channelsAPIobserver !== void 0) {
                        channelsAPIobserver.dispose();
                    }
                    if (_this.retries > 5) {
                        return;
                    }
                    _this.retries++;
                    setTimeout((function () { _this.subscribeToPluginContext(context); }).bind(_this), 100);
                });
            })
                .catch(function (err) {
                console.log("channelsAPIParseError:");
                console.log(err);
                if (annotationsAPIobserver !== void 0) {
                    annotationsAPIobserver.dispose();
                }
                if (channelsAPIobserver !== void 0) {
                    channelsAPIobserver.dispose();
                }
                if (_this.retries > 5) {
                    return;
                }
                _this.retries++;
                setTimeout((function () { _this.subscribeToPluginContext(context); }).bind(_this), 100);
            });
            this.subscribed = true;
        };
        AnnotationDataProvider.subscribeForData = function (handler) {
            if (this.handlers === void 0) {
                this.handlers = [];
            }
            this.handlers.push({ handler: handler });
        };
        AnnotationDataProvider.invokeHandlers = function () {
            if (this.handlers === void 0) {
                console.log("no handlers attached... Skiping...");
                return;
            }
            for (var _i = 0, _a = this.handlers; _i < _a.length; _i++) {
                var h = _a[_i];
                h.handler();
            }
        };
        AnnotationDataProvider.getResidueAnnotations = function (residueId) {
            if (!this.subscribed) {
                return void 0;
            }
            if (this.residueAnnotations !== void 0) {
                var value = this.residueAnnotations.get(residueId);
                if (value === void 0) {
                    return [];
                }
                return value;
            }
            return void 0;
        };
        AnnotationDataProvider.getResidueList = function () {
            if (!this.subscribed || this.residueAnnotations === void 0) {
                return void 0;
            }
            var rv = [];
            this.residueAnnotations.forEach(function (_, key, map) {
                if (rv.indexOf(key) < 0) {
                    rv.push(key);
                }
            });
            return rv;
        };
        AnnotationDataProvider.getChannelAnnotations = function (channelId) {
            if (!this.subscribed) {
                return void 0;
            }
            if (this.channelAnnotations !== void 0) {
                var value = this.channelAnnotations.get(channelId);
                if (value === void 0) {
                    return null;
                }
                return value;
            }
            return void 0;
        };
        AnnotationDataProvider.getChannelAnnotation = function (channelId) {
            if (!this.subscribed) {
                return void 0;
            }
            if (this.channelAnnotations !== void 0) {
                var value = this.channelAnnotations.get(channelId);
                if (value === void 0) {
                    return null;
                }
                return value[0];
            }
            return void 0;
        };
        AnnotationDataProvider.getProteinAnnotations = function () {
            if (!this.subscribed) {
                return void 0;
            }
            if (this.proteinAnnotations !== void 0) {
                return this.proteinAnnotations;
            }
            return void 0;
        };
        return AnnotationDataProvider;
    }());
    AnnotationDataProvider.subscribed = false;
    AnnotationDataProvider.dataReady = false;
    AnnotationDataProvider.retries = 0;
    Annotation.AnnotationDataProvider = AnnotationDataProvider;
})(Annotation || (Annotation = {}));
var LayersVizualizer;
(function (LayersVizualizer) {
    var UI;
    (function (UI) {
        var React = LiteMol.Plugin.React;
        var Transformer = LiteMol.Bootstrap.Entity.Transformer;
        var Visualization = LiteMol.Bootstrap.Visualization;
        var Tooltips = CommonUtils.Tooltips;
        var Tabs = CommonUtils.Tabs;
        ;
        function render(vizualizer, target, plugin) {
            LiteMol.Plugin.ReactDOM.render(React.createElement(App, { vizualizer: vizualizer, controller: plugin }), target);
        }
        UI.render = render;
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.interactionEventStream = void 0;
                _this.tooltipsInitialized = false;
                _this.state = {
                    instanceId: -1,
                    hasData: false,
                    data: [],
                    layerId: 0,
                    coloringPropertyKey: "",
                    customColoringPropertyKey: "",
                    radiusPropertyKey: "MinRadius",
                    customRadiusPropertyKey: "MinRadius",
                    colorBoundsMode: "Absolute",
                    isDOMReady: false,
                    app: _this,
                    currentTunnelRef: "",
                    isLayerSelected: false
                };
                return _this;
            }
            App.prototype.componentDidMount = function () {
                var _this = this;
                var vizualizer = this.props.vizualizer;
                vizualizer.setColorBoundsMode(this.state.colorBoundsMode);
                var state = this.state;
                state.instanceId = vizualizer.getPublicInstanceIdx();
                state.customColoringPropertyKey = vizualizer.getCustomColoringPropertyKey();
                state.coloringPropertyKey = vizualizer.getColoringPropertyKey();
                state.customRadiusPropertyKey = vizualizer.getCustomRadiusPropertyKey();
                state.radiusPropertyKey = vizualizer.getRadiusPropertyKey();
                state.colorBoundsMode = this.state.colorBoundsMode;
                this.setState(state);
                this.vizualizer = vizualizer;
                CommonUtils.Selection.SelectionHelper.attachOnChannelSelectHandler(function (data) {
                    window.setTimeout(function () {
                        var s1 = _this.state;
                        s1.currentTunnelRef = CommonUtils.Selection.SelectionHelper.getSelectedChannelRef();
                        s1.isLayerSelected = false;
                        _this.setState(s1);
                        Tabs.activateTab("left-tabs", "1");
                        var layers = DataInterface.convertLayersToLayerData(data);
                        Tabs.doAfterTabActivated("left-tabs", "1", function () {
                            vizualizer.setData(layers);
                            var s2 = _this.state;
                            s2.data = layers;
                            s2.hasData = true;
                            s2.isDOMReady = false;
                            s2.instanceId = vizualizer.getPublicInstanceIdx();
                            _this.setState(s2);
                            vizualizer.rebindDOMRefs();
                            vizualizer.vizualize();
                            var s3 = _this.state;
                            s3.data = layers;
                            s3.hasData = true;
                            s3.isDOMReady = true;
                            s3.instanceId = vizualizer.getPublicInstanceIdx();
                            _this.setState(s3);
                        });
                    }, 50);
                });
                /*
                CommonUtils.Selection.SelectionHelper.attachOnChannelDeselectHandler(()=>{
                    this.setState({data: [], hasData:false, isDOMReady:false, currentTunnelRef: "", isLayerSelected: false});
                });*/
                $(window).on("lvContentResize", (function () {
                    _this.forceUpdate();
                }).bind(this));
                $(window).on("resize", (function () {
                    _this.forceUpdate();
                }).bind(this));
            };
            App.prototype.componentWillUnmount = function () {
                if (this.interactionEventStream !== void 0) {
                    this.interactionEventStream.dispose();
                }
            };
            App.prototype.render = function () {
                if (this.state.hasData) {
                    $('.init-lvz-tooltip').tooltip();
                    return React.createElement(PaintingArea, __assign({}, this.state));
                }
                return React.createElement(Hint, __assign({}, this.state));
            };
            return App;
        }(React.Component));
        UI.App = App;
        ;
        var PaintingArea = (function (_super) {
            __extends(PaintingArea, _super);
            function PaintingArea() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            PaintingArea.prototype.render = function () {
                return (React.createElement("div", { className: "layerVizualizer", id: "layer-vizualizer-ui" + this.props.instanceId },
                    React.createElement("div", { className: "wrapper-container" },
                        React.createElement(Controls, __assign({}, this.props, { isCustom: false })),
                        React.createElement(CanvasWrapper, __assign({}, this.props)),
                        React.createElement(Controls, __assign({}, this.props, { isCustom: true }))),
                    React.createElement(CommonControls, __assign({}, this.props))));
            };
            ;
            return PaintingArea;
        }(React.Component));
        var Hint = (function (_super) {
            __extends(Hint, _super);
            function Hint() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Hint.prototype.render = function () {
                return (React.createElement("div", { id: "layer-vizualizer-hint-div" + this.props.instanceId, className: "layer-vizualizer-hint-div" }, "Click on one of available channels to see more information..."));
            };
            return Hint;
        }(React.Component));
        var ColorMenuItem = (function (_super) {
            __extends(ColorMenuItem, _super);
            function ColorMenuItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ColorMenuItem.prototype.changeColoringProperty = function (e) {
                var targetElement = e.target;
                var instanceIdx = Number(targetElement.getAttribute("data-instanceidx")).valueOf();
                var instance = LayersVizualizer.Vizualizer.ACTIVE_INSTANCES[instanceIdx];
                var propertyName = targetElement.getAttribute("data-propertyname");
                if (propertyName === null) {
                    console.log("No property name found!");
                    return;
                }
                if (this.props.isCustom) {
                    instance.setCustomColoringPropertyKey(propertyName);
                }
                else {
                    instance.setColoringPropertyKey(propertyName);
                }
                instance.vizualize();
                var state = this.props.app.state;
                if (this.props.isCustom) {
                    state.customColoringPropertyKey = propertyName;
                    this.props.app.setState(state);
                }
                else {
                    state.coloringPropertyKey = propertyName;
                    this.props.app.setState(state);
                }
            };
            ColorMenuItem.prototype.render = function () {
                if (Tooltips.hasTooltipText(this.props.propertyName)) {
                    return (React.createElement("li", null,
                        React.createElement("a", { "data-instanceidx": this.props.instanceId, "data-propertyname": this.props.propertyName, "data-toggle": "tooltip", "data-placement": "right", title: Tooltips.getMessageOrLeaveText("tooltip-" + this.props.propertyName), className: "init-lvz-tooltip lvz-properties", onClick: this.changeColoringProperty.bind(this) }, Tooltips.getMessageOrLeaveText(this.props.propertyName))));
                }
                else {
                    return (React.createElement("li", null,
                        React.createElement("a", { "data-instanceidx": this.props.instanceId, "data-propertyname": this.props.propertyName, onClick: this.changeColoringProperty.bind(this) }, Tooltips.getMessageOrLeaveText(this.props.propertyName))));
                }
            };
            return ColorMenuItem;
        }(React.Component));
        var RadiusMenuItem = (function (_super) {
            __extends(RadiusMenuItem, _super);
            function RadiusMenuItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RadiusMenuItem.prototype.changeRadiusProperty = function (e) {
                var targetElement = e.target;
                var instanceIdx = Number(targetElement.getAttribute("data-instanceidx")).valueOf();
                var instance = LayersVizualizer.Vizualizer.ACTIVE_INSTANCES[instanceIdx];
                var propertyName = targetElement.getAttribute("data-propertyname");
                if (propertyName === null || propertyName === void 0) {
                    return;
                }
                if (this.props.isCustom) {
                    instance.setCustomRadiusPropertyKey(propertyName);
                }
                else {
                    instance.setRadiusPropertyKey(propertyName);
                }
                instance.vizualize();
                var state = this.props.app.state;
                if (this.props.isCustom) {
                    state.customRadiusPropertyKey = propertyName;
                    this.props.app.setState(state);
                }
                else {
                    state.radiusPropertyKey = propertyName;
                    this.props.app.setState(state);
                }
            };
            RadiusMenuItem.prototype.render = function () {
                if (Tooltips.hasTooltipText(this.props.propertyName)) {
                    return (React.createElement("li", null,
                        React.createElement("a", { "data-instanceidx": this.props.instanceId, "data-propertyname": this.props.propertyName, "data-toggle": "tooltip", "data-placement": "right", title: Tooltips.getMessageOrLeaveText("tooltip-" + this.props.propertyName), className: "init-lvz-tooltip lvz-radius", onClick: this.changeRadiusProperty.bind(this) }, Tooltips.getMessageOrLeaveText(this.props.propertyName))));
                }
                else {
                    return (React.createElement("li", null,
                        React.createElement("a", { "data-instanceidx": this.props.instanceId, "data-propertyname": this.props.propertyName, onClick: this.changeRadiusProperty.bind(this) }, Tooltips.getMessageOrLeaveText(this.props.propertyName))));
                }
            };
            return RadiusMenuItem;
        }(React.Component));
        var ColorBoundsMenuItem = (function (_super) {
            __extends(ColorBoundsMenuItem, _super);
            function ColorBoundsMenuItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ColorBoundsMenuItem.prototype.changeColorBoundsMode = function (e) {
                var targetElement = e.target;
                var instanceIdx = Number(targetElement.getAttribute("data-instanceidx")).valueOf();
                var instance = LayersVizualizer.Vizualizer.ACTIVE_INSTANCES[instanceIdx];
                var mode = targetElement.getAttribute("data-mode");
                if (mode === null || mode === void 0) {
                    return;
                }
                instance.setColorBoundsMode(mode);
                instance.vizualize();
                var state = this.props.app.state;
                state.colorBoundsMode = mode;
                this.props.app.setState(state);
            };
            ColorBoundsMenuItem.prototype.render = function () {
                return (React.createElement("li", null,
                    React.createElement("a", { "data-instanceidx": this.props.instanceId, "data-mode": this.props.mode, onClick: this.changeColorBoundsMode.bind(this) }, this.props.mode)));
            };
            return ColorBoundsMenuItem;
        }(React.Component));
        var BootstrapDropUpMenuButton = (function (_super) {
            __extends(BootstrapDropUpMenuButton, _super);
            function BootstrapDropUpMenuButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BootstrapDropUpMenuButton.prototype.render = function () {
                return React.createElement("div", { className: "btn-group dropup" },
                    React.createElement("button", { type: "button", className: "btn btn-xs btn-primary dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                        this.props.label,
                        " ",
                        React.createElement("span", { className: "caret" })),
                    React.createElement("ul", { className: "dropdown-menu" }, this.props.items));
            };
            return BootstrapDropUpMenuButton;
        }(React.Component));
        var Controls = (function (_super) {
            __extends(Controls, _super);
            function Controls() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Controls.prototype.render = function () {
                return (React.createElement("div", { className: "controls" },
                    React.createElement(RadiusSwitch, { state: this.props, isCustom: this.props.isCustom, radiusProperty: (this.props.isCustom) ? this.props.customRadiusPropertyKey : this.props.radiusPropertyKey }),
                    React.createElement(ColorBySwitch, { state: this.props, isCustom: this.props.isCustom, coloringProperty: (this.props.isCustom) ? this.props.customColoringPropertyKey : this.props.coloringPropertyKey })));
            };
            return Controls;
        }(React.Component));
        var CommonControls = (function (_super) {
            __extends(CommonControls, _super);
            function CommonControls() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CommonControls.prototype.render = function () {
                return (React.createElement("div", { className: "controls" },
                    React.createElement(CommonButtonArea, __assign({}, this.props))));
            };
            return CommonControls;
        }(React.Component));
        var ColorBySwitch = (function (_super) {
            __extends(ColorBySwitch, _super);
            function ColorBySwitch() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ColorBySwitch.prototype.generateColorMenu = function () {
                var rv = [];
                for (var prop in this.props.state.data[0].Properties) {
                    rv.push(React.createElement(ColorMenuItem, __assign({ propertyName: prop, isCustom: this.props.isCustom }, this.props.state)));
                }
                return React.createElement(BootstrapDropUpMenuButton, { items: rv, label: Tooltips.getMessageOrLeaveText(this.props.coloringProperty) });
            };
            ColorBySwitch.prototype.render = function () {
                var items = this.generateColorMenu();
                return (React.createElement("span", { className: "block-like" },
                    React.createElement("span", { className: "control-label" }, "Color by:"),
                    " ",
                    items));
            };
            return ColorBySwitch;
        }(React.Component));
        var RadiusSwitch = (function (_super) {
            __extends(RadiusSwitch, _super);
            function RadiusSwitch() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RadiusSwitch.prototype.generateRadiusSwitch = function () {
                var properties = ["MinRadius", "MinFreeRadius"];
                var rv = [];
                for (var _i = 0, properties_1 = properties; _i < properties_1.length; _i++) {
                    var prop = properties_1[_i];
                    rv.push(React.createElement(RadiusMenuItem, __assign({ propertyName: prop, isCustom: this.props.isCustom }, this.props.state)));
                }
                return React.createElement(BootstrapDropUpMenuButton, { items: rv, label: Tooltips.getMessageOrLeaveText(this.props.radiusProperty) });
            };
            RadiusSwitch.prototype.render = function () {
                var items = this.generateRadiusSwitch();
                return (React.createElement("span", { className: "block-like" },
                    React.createElement("span", { className: "control-label" }, "Tunnel radius:"),
                    " ",
                    items));
            };
            return RadiusSwitch;
        }(React.Component));
        var CommonButtonArea = (function (_super) {
            __extends(CommonButtonArea, _super);
            function CommonButtonArea() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CommonButtonArea.prototype.generateColorBoundsSwitch = function () {
                var properties = ["Min/max", "Absolute"];
                var rv = [];
                for (var _i = 0, properties_2 = properties; _i < properties_2.length; _i++) {
                    var prop = properties_2[_i];
                    rv.push(React.createElement(ColorBoundsMenuItem, __assign({ mode: prop }, this.props)));
                }
                var label = properties[(this.props.colorBoundsMode == "Min/max") ? 0 : 1];
                return React.createElement(BootstrapDropUpMenuButton, { items: rv, label: label });
            };
            CommonButtonArea.prototype.render = function () {
                var items = this.generateColorBoundsSwitch();
                return (React.createElement("div", { className: "common-area" },
                    React.createElement(ColorBoundsSwitchButton, { items: items }),
                    React.createElement(ExportButton, { instanceId: this.props.instanceId })));
            };
            return CommonButtonArea;
        }(React.Component));
        var ExportTypeButton = (function (_super) {
            __extends(ExportTypeButton, _super);
            function ExportTypeButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExportTypeButton.prototype.dataURItoBlob = function (dataURI) {
                // convert base64 to raw binary data held in a string
                // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
                var byteString = atob(dataURI.split(',')[1]);
                // separate out the mime component
                var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                // write the bytes of the string to an ArrayBuffer
                var ab = new ArrayBuffer(byteString.length);
                var dw = new DataView(ab);
                for (var i = 0; i < byteString.length; i++) {
                    dw.setUint8(i, byteString.charCodeAt(i));
                }
                // write the ArrayBuffer to a blob, and you're done
                return new Blob([ab], { type: mimeString });
            };
            ExportTypeButton.prototype.triggerDownload = function (dataUrl, fileName) {
                var a = document.createElement("a");
                document.body.appendChild(a);
                $(a).css("display", "none");
                var blob = this.dataURItoBlob(dataUrl);
                var url = window.URL.createObjectURL(blob);
                a.href = url;
                a.download = fileName;
                a.click();
                window.URL.revokeObjectURL(url);
            };
            ExportTypeButton.prototype.export = function (e) {
                var targetElement = e.target;
                var instanceIdx = Number(targetElement.getAttribute("data-instanceidx")).valueOf();
                var instance = LayersVizualizer.Vizualizer.ACTIVE_INSTANCES[instanceIdx];
                var exportType = targetElement.getAttribute("data-exporttype");
                if (exportType === null) {
                    return;
                }
                var imgDataUrl = null;
                switch (exportType) {
                    case "PNG":
                        imgDataUrl = instance.exportImage();
                        break;
                    case "SVG":
                        imgDataUrl = instance.exportSVGImage();
                        break;
                    /*case "PDF":
                        imgDataUrl = instance.exportPDF();
                        break;*/
                    default:
                        throw new Error("Unsupported export type '" + exportType + "'");
                }
                this.triggerDownload(imgDataUrl, "export-2D." + exportType.toLowerCase());
            };
            ExportTypeButton.prototype.render = function () {
                return React.createElement("li", null,
                    React.createElement("a", { "data-instanceidx": this.props.instanceId, "data-exporttype": this.props.exportType, onClick: this.export.bind(this) }, this.props.exportType));
            };
            return ExportTypeButton;
        }(React.Component));
        var ExportButton = (function (_super) {
            __extends(ExportButton, _super);
            function ExportButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ExportButton.prototype.generateItems = function () {
                var rv = [];
                var supportedExportTypes = ["PNG", "SVG" /*,"PDF"*/];
                for (var _i = 0, supportedExportTypes_1 = supportedExportTypes; _i < supportedExportTypes_1.length; _i++) {
                    var type = supportedExportTypes_1[_i];
                    rv.push(React.createElement(ExportTypeButton, { instanceId: this.props.instanceId, exportType: type }));
                }
                return rv;
            };
            ExportButton.prototype.render = function () {
                var label = "Export";
                var rv = this.generateItems();
                return (React.createElement(BootstrapDropUpMenuButton, { items: rv, label: label }));
            };
            return ExportButton;
        }(React.Component));
        var ColorBoundsSwitchButton = (function (_super) {
            __extends(ColorBoundsSwitchButton, _super);
            function ColorBoundsSwitchButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ColorBoundsSwitchButton.prototype.render = function () {
                return (React.createElement("span", { className: "color-bounds-button-container" },
                    React.createElement("span", { className: "control-label", title: "Color bounds for both halfs of vizualized tunnel." }, "Color bounds:"),
                    " ",
                    this.props.items));
            };
            return ColorBoundsSwitchButton;
        }(React.Component));
        var CanvasWrapper = (function (_super) {
            __extends(CanvasWrapper, _super);
            function CanvasWrapper() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CanvasWrapper.prototype.render = function () {
                return (React.createElement("div", { className: "canvas-wrapper" },
                    React.createElement(RealCanvas, __assign({}, this.props)),
                    React.createElement(ImgOverlay, __assign({}, this.props)),
                    React.createElement(InteractionMap, __assign({}, this.props))));
            };
            return CanvasWrapper;
        }(React.Component));
        var ImgOverlay = (function (_super) {
            __extends(ImgOverlay, _super);
            function ImgOverlay() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ImgOverlay.prototype.render = function () {
                return (React.createElement("img", { className: "fake-canvas", id: "layer-vizualizer-fake-canvas" + this.props.instanceId, useMap: "#layersInteractiveMap" + this.props.instanceId, src: "images/no_img.png" }));
            };
            return ImgOverlay;
        }(React.Component));
        var RealCanvas = (function (_super) {
            __extends(RealCanvas, _super);
            function RealCanvas() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RealCanvas.prototype.render = function () {
                return (React.createElement("canvas", { id: "layer-vizualizer-canvas" + this.props.instanceId, className: "layer-vizualizer-canvas", width: "700", height: "150" }));
            };
            return RealCanvas;
        }(React.Component));
        ;
        ;
        var InteractionMap = (function (_super) {
            __extends(InteractionMap, _super);
            function InteractionMap() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            InteractionMap.prototype.getLayerResidues = function (layerIdx) {
                var res = [];
                for (var _i = 0, _a = this.props.data[layerIdx].Residues; _i < _a.length; _i++) {
                    var residue = _a[_i];
                    var parts = residue.split(" ");
                    res.push({
                        authAsymId: parts[2],
                        authSeqNumber: Number(parts[1]).valueOf()
                    });
                }
                return res;
            };
            InteractionMap.prototype.resetFocusToTunnel = function () {
                LiteMol.Bootstrap.Command.Entity.Focus.dispatch(this.props.app.props.controller.context, this.props.app.props.controller.context.select(this.props.app.state.currentTunnelRef));
            };
            InteractionMap.prototype.showLayerResidues3DAndFocus = function (layerIdx) {
                var _this = this;
                /*
                let theme = generateLayerSelectColorTheme(layerIdx,this.props.app);
                applyTheme(theme,this.props.app.props.controller,this.props.app.state.currentTunnelRef);
                */
                var residues = this.getLayerResidues(layerIdx);
                var query = (_a = LiteMol.Core.Structure.Query).residues.apply(_a, residues);
                CommonUtils.Selection.SelectionHelper.clearAltSelection(this.props.app.props.controller);
                var t = this.props.app.props.controller.createTransform();
                t.add('polymer-visual', Transformer.Molecule.CreateSelectionFromQuery, { query: query, name: 'Residues' }, { ref: CommonUtils.Selection.SelectionHelper.getAltSelectionVisualRef() })
                    .then(Transformer.Molecule.CreateVisual, { style: Visualization.Molecule.Default.ForType.get('BallsAndSticks') });
                this.props.app.props.controller.applyTransform(t)
                    .then(function (res) {
                    //Focus
                    LiteMol.Bootstrap.Command.Entity.Focus.dispatch(_this.props.app.props.controller.context, _this.props.app.props.controller.context.select(CommonUtils.Selection.SelectionHelper.getAltSelectionVisualRef()));
                });
                var _a;
            };
            InteractionMap.prototype.displayDetailsEventHandler = function (e) {
                var targetElement = e.target;
                var layerIdx = Number(targetElement.getAttribute("data-layeridx")).valueOf();
                var instanceIdx = Number(targetElement.getAttribute("data-instanceidx")).valueOf();
                var instance = LayersVizualizer.Vizualizer.ACTIVE_INSTANCES[instanceIdx];
                instance.highlightHitbox(layerIdx);
                if (!this.props.app.state.isLayerSelected) {
                    var state = this.props.app.state;
                    state.layerId = layerIdx;
                    this.props.app.setState(state);
                    $(window).trigger('layerTriggered', layerIdx);
                }
            };
            InteractionMap.prototype.displayLayerResidues3DEventHandler = function (e) {
                var targetElement = e.target;
                var layerIdx = Number(targetElement.getAttribute("data-layeridx")).valueOf();
                var instanceIdx = Number(targetElement.getAttribute("data-instanceidx")).valueOf();
                var instance = LayersVizualizer.Vizualizer.ACTIVE_INSTANCES[instanceIdx];
                if (instance.getSelectedLayer() === layerIdx) {
                    this.props.app.state.isLayerSelected = false;
                    CommonUtils.Selection.SelectionHelper.clearAltSelection(this.props.app.props.controller);
                    this.resetFocusToTunnel();
                    instance.deselectLayer();
                    instance.highlightHitbox(layerIdx);
                }
                else {
                    var state = this.props.app.state;
                    state.layerId = layerIdx;
                    state.isLayerSelected = true;
                    this.props.app.setState(state);
                    this.showLayerResidues3DAndFocus(layerIdx);
                    instance.deselectLayer();
                    instance.selectLayer(layerIdx);
                    $(window).trigger('layerTriggered', layerIdx);
                    $(window).trigger('resize');
                }
            };
            InteractionMap.prototype.getTunnelScale = function (tunnel) {
                var xScale = 0;
                var yScale = 0;
                if (tunnel !== null) {
                    var scale = tunnel.getScale();
                    if (scale !== null) {
                        xScale = scale.x;
                        yScale = scale.y;
                    }
                }
                return {
                    xScale: xScale,
                    yScale: yScale
                };
            };
            InteractionMap.prototype.transformCoordinates = function (x, y, width, height, scale, bounds) {
                var vizualizer = LayersVizualizer.Vizualizer.ACTIVE_INSTANCES[this.props.instanceId];
                //Real width can be different to canvas width - hitboxes could run out of space
                var realXScale = 1;
                var realWidth = vizualizer.getCanvas().offsetWidth.valueOf();
                if (realWidth != 0) {
                    realXScale = 1 / (vizualizer.getCanvas().width / realWidth);
                }
                var realYScale = 1;
                var realHeight = vizualizer.getCanvas().offsetHeight.valueOf();
                if (realHeight != 0) {
                    realYScale = 1 / (vizualizer.getCanvas().height / realHeight);
                }
                return {
                    sx: (bounds.x + x * scale.xScale) * realXScale,
                    sy: (bounds.y + y * scale.yScale) * realYScale,
                    dx: (bounds.x + (x + width) * scale.xScale) * realXScale,
                    dy: (bounds.y + (y + height) * scale.yScale) * realYScale
                };
            };
            InteractionMap.prototype.makeCoordinateString = function (x, y, width, height, scale, bounds) {
                var coordinates = this.transformCoordinates(x, y, width, height, scale, bounds);
                return String(coordinates.sx) + ','
                    + String(coordinates.sy) + ','
                    + String(coordinates.dx) + ','
                    + String(coordinates.dy);
            };
            InteractionMap.prototype.generatePhysicalHitboxesCoords = function () {
                var vizualizer = LayersVizualizer.Vizualizer.ACTIVE_INSTANCES[this.props.instanceId];
                var data = this.props.data;
                //Data was not prepared yet
                if (vizualizer.isDataDirty()) {
                    vizualizer.prepareData();
                }
                var hitboxes = vizualizer.getHitboxes();
                var tunnels = vizualizer.getTunnels();
                if (tunnels === null
                    || hitboxes === null
                    || (hitboxes.defaultTunnel === null && hitboxes.customizable === null)) {
                    return [];
                }
                var defaultTunnel = tunnels.default;
                var customizableTunnel = tunnels.customizable;
                var dTproperties = null;
                var dTbounds = null;
                if (defaultTunnel !== null) {
                    dTproperties = this.getTunnelScale(defaultTunnel.tunnel);
                    dTbounds = defaultTunnel.bounds;
                }
                var cTproperties = null;
                var cTbounds = null;
                if (customizableTunnel !== null) {
                    cTproperties = this.getTunnelScale(customizableTunnel.tunnel);
                    cTbounds = customizableTunnel.bounds;
                }
                var rv = [];
                for (var i = 0; i < data.length; i++) {
                    if (hitboxes.defaultTunnel !== null && dTproperties !== null && dTbounds !== null) {
                        var hitbox = hitboxes.defaultTunnel[i];
                        rv.push({
                            layerIdx: i,
                            coords: this.makeCoordinateString(hitbox.x, hitbox.y, hitbox.width, hitbox.height, dTproperties, dTbounds)
                        });
                    }
                    if (hitboxes.customizable !== null && cTproperties !== null && cTbounds !== null) {
                        var hitbox = hitboxes.customizable[i];
                        rv.push({
                            layerIdx: i,
                            coords: this.makeCoordinateString(hitbox.x, hitbox.y, hitbox.width, hitbox.height, cTproperties, cTbounds)
                        });
                    }
                }
                return rv;
            };
            InteractionMap.prototype.render = function () {
                var areas = [];
                if (this.props.isDOMReady) {
                    var hitboxesCoords = this.generatePhysicalHitboxesCoords();
                    for (var i = 0; i < hitboxesCoords.length; i++) {
                        areas.push(React.createElement("area", { shape: "rect", coords: hitboxesCoords[i].coords.valueOf(), "data-layeridx": String(hitboxesCoords[i].layerIdx.valueOf()), "data-instanceidx": String(this.props.instanceId), onMouseOver: this.displayDetailsEventHandler.bind(this), onMouseDown: this.displayLayerResidues3DEventHandler.bind(this) }));
                    }
                }
                return (React.createElement("map", { name: "layersInteractiveMap" + this.props.instanceId, id: "layer-vizualizer-hitbox-map" + this.props.instanceId }, areas));
            };
            return InteractionMap;
        }(React.Component));
    })(UI = LayersVizualizer.UI || (LayersVizualizer.UI = {}));
})(LayersVizualizer || (LayersVizualizer = {}));
var LayersVizualizer;
(function (LayersVizualizer) {
    ;
    ;
    ;
    ;
    var DrawableObject = (function () {
        function DrawableObject() {
        }
        return DrawableObject;
    }());
    LayersVizualizer.DrawableObject = DrawableObject;
    var ContextAwareObject = (function (_super) {
        __extends(ContextAwareObject, _super);
        function ContextAwareObject(context) {
            var _this = _super.call(this) || this;
            _this.context = context;
            _this.lineWidth = 1;
            return _this;
        }
        ContextAwareObject.prototype.clipToBounds = function (bounds) {
            this.context.rect(bounds.x, bounds.y, bounds.width, bounds.height);
            this.context.clip();
        };
        /*
                public setContext(context:CanvasRenderingContext2D){
                    this.context = context;
                }
        */
        /* Context must be known before hitbox generation
                public draw(x: number, y:number, width:number, height:number, context?:CanvasRenderingContext2D):void{
                    this.setContext(context);
                    this.draw(x,y,width,height);
                }
        */
        ContextAwareObject.prototype.drawFromBounds = function (bounds) {
            this.draw(bounds.x, bounds.y, bounds.width, bounds.height);
        };
        ContextAwareObject.prototype.clear = function (bounds) {
            this.context.clearRect(bounds.x - this.lineWidth, bounds.y - this.lineWidth, bounds.width + this.lineWidth * 2, bounds.height + this.lineWidth * 2);
        };
        return ContextAwareObject;
    }(DrawableObject));
    LayersVizualizer.ContextAwareObject = ContextAwareObject;
    //--
    var Axis = (function (_super) {
        __extends(Axis, _super);
        function Axis(minVal, maxVal, context, countOfParts, isHorizontal, marginPercent, lineWidth) {
            if (isHorizontal === void 0) { isHorizontal = true; }
            if (marginPercent === void 0) { marginPercent = 5; }
            if (lineWidth === void 0) { lineWidth = 2; }
            var _this = _super.call(this, context) || this;
            _this.doHighlight = false; //Žluté podbarvení obdélníku
            _this.lineColor = "#8c8c8c";
            _this.isHorizontal = isHorizontal;
            _this.minVal = minVal;
            _this.maxVal = maxVal;
            _this.countOfParts = countOfParts;
            _this.margin = marginPercent;
            _this.lineWidth = lineWidth;
            return _this;
        }
        Axis.prototype.drawMainLine = function (bounds) {
            if (this.isHorizontal) {
                this.context.moveTo(bounds.x, bounds.y + bounds.height / 2);
                this.context.lineTo(bounds.x + bounds.width, bounds.y + bounds.height / 2);
            }
            else {
                this.context.moveTo(bounds.x + bounds.width / 2, bounds.y);
                this.context.lineTo(bounds.x + bounds.width / 2, bounds.y + bounds.height);
            }
        };
        Axis.prototype.drawPartLine = function (bounds, partIdx) {
            if (this.isHorizontal) {
                var partSize = bounds.width / this.countOfParts;
                var margin = (bounds.height / 100) * this.margin;
                this.context.moveTo(bounds.x + partIdx * partSize, bounds.y + margin);
                this.context.lineTo(bounds.x + partIdx * partSize, bounds.y + (bounds.height - margin));
            }
            else {
                var partSize = bounds.height / this.countOfParts;
                var margin = (bounds.width / 100) * this.margin;
                this.context.moveTo(bounds.x + margin, bounds.y + partIdx * partSize);
                this.context.lineTo(bounds.x + (bounds.width - margin), bounds.y + partIdx * partSize);
            }
        };
        Axis.prototype.draw = function (x, y, width, height) {
            var bounds = { x: x, y: y, width: width, height: height };
            this.clear(bounds);
            this.context.save();
            this.clipToBounds(bounds);
            this.context.strokeStyle = this.lineColor;
            this.context.beginPath();
            this.context.lineWidth = this.lineWidth;
            this.drawMainLine(bounds);
            for (var i = 0; i <= this.countOfParts; i++) {
                this.drawPartLine(bounds, i);
            }
            this.context.closePath();
            this.context.stroke();
            if (this.doHighlight) {
                this.context.fillStyle = "yellow";
                this.context.fillRect(x, y, width, height);
            }
            this.context.restore();
        };
        return Axis;
    }(ContextAwareObject));
    LayersVizualizer.Axis = Axis;
    var CurlyBrackets = (function (_super) {
        __extends(CurlyBrackets, _super);
        function CurlyBrackets(context /*, isLeftToRight:boolean=true*/) {
            var _this = _super.call(this, context) || this;
            _this.lineColor = "#8c8c8c";
            _this.isLeftToRight = true; /*isLeftToRight;*/
            return _this;
        }
        CurlyBrackets.prototype.draw = function (x, y, width, height) {
            //!!!
            this.isLeftToRight = true;
            //!!!
            var bounds = { x: x, y: y, width: width, height: height };
            this.clear(bounds);
            /*
            let radius = bounds.width/2;
            let linelength = bounds.height / 2;

            let lx = bounds.x + radius;
            let r = (this.isLeftToRight?(-1)*radius:radius);
            */
            var border = (bounds.width / 100) * 10;
            var borderVertical = (bounds.height / 100) * 2;
            var radius = (bounds.width - (2 * border)) / 2;
            var lineLength = (bounds.height - (borderVertical * 2)) / 2;
            var p0 = {
                x: bounds.x + border,
                y: bounds.y + borderVertical
            };
            var p1 = {
                x: bounds.x + border + radius,
                y: bounds.y + borderVertical
            };
            var p2 = {
                x: bounds.x + border + radius,
                y: bounds.y + borderVertical + radius
            };
            var p3 = {
                x: bounds.x + border + radius,
                y: bounds.y + borderVertical + lineLength - radius
            };
            var p4 = {
                x: bounds.x + border + radius,
                y: bounds.y + borderVertical + lineLength
            };
            var p5 = {
                x: bounds.x + border + radius * 2,
                y: bounds.y + borderVertical + lineLength
            };
            var p6 = {
                x: bounds.x + border + radius,
                y: bounds.y + borderVertical + lineLength + radius
            };
            var p7 = {
                x: bounds.x + border + radius,
                y: bounds.y + borderVertical + lineLength * 2 - radius
            };
            var p8 = {
                x: bounds.x + border + radius,
                y: bounds.y + borderVertical + lineLength * 2
            };
            var p9 = {
                x: bounds.x + border,
                y: bounds.y + borderVertical + lineLength * 2
            };
            this.context.save();
            this.clipToBounds(bounds);
            this.context.strokeStyle = this.lineColor;
            this.context.lineWidth = 1;
            this.context.beginPath();
            this.context.moveTo(p0.x, p0.y);
            this.context.arc(p0.x, p2.y, radius, 1.5 * Math.PI, 0 * Math.PI);
            this.context.moveTo(p2.x, p2.y);
            this.context.lineTo(p3.x, p3.y);
            this.context.moveTo(p5.x, p5.y);
            this.context.arc(p5.x, p3.y, radius, 0.5 * Math.PI, 1 * Math.PI);
            this.context.moveTo(p5.x, p5.y);
            this.context.lineTo(p5.x, p5.y);
            this.context.moveTo(p6.x, p6.y);
            this.context.arc(p5.x, p6.y, radius, 1 * Math.PI, 1.5 * Math.PI);
            this.context.moveTo(p6.x, p6.y);
            this.context.lineTo(p7.x, p7.y);
            this.context.arc(p9.x, p7.y, radius, 0 * Math.PI, 0.5 * Math.PI);
            this.context.stroke();
            this.context.closePath();
            this.context.restore();
        };
        return CurlyBrackets;
    }(ContextAwareObject));
    LayersVizualizer.CurlyBrackets = CurlyBrackets;
    var ArrowHeadLine = (function (_super) {
        __extends(ArrowHeadLine, _super);
        function ArrowHeadLine(context, isHorizontal) {
            if (isHorizontal === void 0) { isHorizontal = true; }
            var _this = _super.call(this, context) || this;
            _this.lineColor = "#8c8c8c";
            _this.doHighlight = false; //Žluté podbarvení obdélníku
            _this.isHorizontal = isHorizontal;
            _this.lineWidth = 0.5;
            return _this;
        }
        ArrowHeadLine.prototype.draw = function (x, y, width, height) {
            this.bounds = { x: x, y: y, width: width, height: height };
            var xMargin = ((width / 100) * 2);
            var yMargin = ((height / 100) * 15);
            var x1 = (this.isHorizontal ? x + xMargin : x + width / 2 - this.lineWidth / 2);
            var x2 = (this.isHorizontal ? x + width - xMargin : x + width / 2 - this.lineWidth / 2);
            var y1 = (this.isHorizontal ? y + height / 2 - this.lineWidth / 2 : y + yMargin);
            var y2 = (this.isHorizontal ? y + height / 2 - this.lineWidth / 2 : y + height - yMargin);
            this.clear(this.bounds);
            if (this.doHighlight) {
                this.context.save();
                this.context.fillStyle = "yellow";
                this.context.fillRect(x, y, width, height);
                this.context.restore();
            }
            this.context.save();
            this.clipToBounds(this.bounds);
            this.context.strokeStyle = this.lineColor;
            this.context.setLineDash([1, 2]);
            this.context.lineWidth = this.lineWidth;
            //Base line
            this.context.beginPath();
            this.context.moveTo(x1, y1);
            this.context.lineTo(x2, y2);
            this.context.closePath();
            this.context.stroke();
            this.context.restore();
            // draw the starting arrowhead
            var startRadians = Math.atan((y2 - y1) / (x2 - x1));
            startRadians += ((x2 > x1) ? -90 : 90) * Math.PI / 180;
            this.drawArrowhead(x1, y1, startRadians);
            // draw the ending arrowhead
            var endRadians = Math.atan((y2 - y1) / (x2 - x1));
            endRadians += ((x2 > x1) ? 90 : -90) * Math.PI / 180;
            this.drawArrowhead(x2, y2, endRadians);
        };
        ArrowHeadLine.prototype.drawArrowhead = function (x, y, radians) {
            if (this.bounds === void 0) {
                throw new Error("Unsupported state! Bounds not initialized before function call.");
            }
            this.context.save();
            this.clipToBounds(this.bounds);
            this.context.strokeStyle = this.lineColor;
            this.context.fillStyle = this.lineColor;
            this.context.lineWidth = this.lineWidth;
            this.clipToBounds(this.bounds);
            this.context.beginPath();
            this.context.translate(x, y);
            this.context.rotate(radians);
            this.context.moveTo(0, 0);
            this.context.lineTo(2.5, 6);
            this.context.lineTo(0, 0);
            this.context.lineTo(-2.5, 6);
            this.context.lineTo(0, 0);
            this.context.closePath();
            this.context.stroke();
            this.context.restore();
        };
        return ArrowHeadLine;
    }(ContextAwareObject));
    LayersVizualizer.ArrowHeadLine = ArrowHeadLine;
    var TextBox = (function (_super) {
        __extends(TextBox, _super);
        function TextBox(value, context, fontSize, textAlign) {
            if (fontSize === void 0) { fontSize = "medium"; }
            if (textAlign === void 0) { textAlign = "center"; }
            var _this = _super.call(this, context) || this;
            _this.doHighlight = false; //Žluté podbarvení obdélníků s textem
            _this.value = value;
            _this.fontSize = fontSize;
            _this.textAlign = textAlign;
            _this.lineWidth = 2;
            return _this;
        }
        TextBox.prototype.fontSizeToPercent = function (fontSize) {
            if (typeof (fontSize) === "number") {
                return fontSize;
            }
            switch (fontSize) {
                case "small":
                    return 5;
                case "medium":
                    return 6;
                case "big":
                    return 7;
                default:
                    return this.fontSizeToPercent("medium");
            }
        };
        TextBox.prototype.getRealFontSize = function (fontSize) {
            var hUnit = this.context.canvas.height / 100;
            return this.fontSizeToPercent(fontSize) * hUnit;
        };
        TextBox.prototype.draw = function (x, y, width, height) {
            var realTextSize = this.getRealFontSize(this.fontSize);
            this.context.save();
            this.clear({ x: x, y: y, width: width, height: height });
            if (this.doHighlight) {
                this.context.fillStyle = "yellow";
                this.context.fillRect(x, y, width, height);
            }
            this.context.font = "normal normal normal " + realTextSize + "px sans-serif";
            this.context.fillStyle = "#8c8c8c";
            this.context.textAlign = this.textAlign;
            this.context.textBaseline = "middle";
            switch (this.textAlign) {
                case "left":
                    this.context.fillText(this.value, x, y + height / 2, width);
                    break;
                case "center":
                    this.context.fillText(this.value, x + width / 2, y + height / 2, width);
                    break;
                case "right":
                    this.context.fillText(this.value, x + width, y + height / 2, width);
                    break;
            }
            this.context.restore();
        };
        return TextBox;
    }(ContextAwareObject));
    LayersVizualizer.TextBox = TextBox;
    var ColorMixer = (function (_super) {
        __extends(ColorMixer, _super);
        function ColorMixer(minVal, maxVal, context, paletteFunction, paletteFunctionSettings, isHorizontal) {
            if (isHorizontal === void 0) { isHorizontal = false; }
            var _this = _super.call(this, context) || this;
            _this.lineColor = "#8c8c8c";
            _this.minVal = minVal;
            _this.maxVal = maxVal;
            _this.paletteFunction = paletteFunction;
            _this.paletteFunctionSettings = paletteFunctionSettings;
            _this.isHorizontal = isHorizontal;
            return _this;
        }
        ColorMixer.prototype.draw = function (x, y, width, height) {
            var bounds = { x: x, y: y, width: width, height: height };
            this.clear(bounds);
            this.context.save();
            this.clipToBounds(bounds);
            this.context.strokeStyle = this.lineColor;
            var my_gradient = this.context.createLinearGradient(bounds.x + (this.isHorizontal ? bounds.width : 0), bounds.y, bounds.x, bounds.y + (this.isHorizontal ? 0 : bounds.height));
            my_gradient.addColorStop(0, this.paletteFunction(Number(this.maxVal), this.paletteFunctionSettings));
            my_gradient.addColorStop(0.5, this.paletteFunction(Number((this.minVal + this.maxVal) / 2), this.paletteFunctionSettings));
            my_gradient.addColorStop(1, this.paletteFunction(Number(this.minVal), this.paletteFunctionSettings));
            this.context.beginPath();
            this.context.moveTo(bounds.x, bounds.y);
            this.context.fillStyle = my_gradient;
            this.context.lineWidth = this.lineWidth;
            this.context.rect(bounds.x, bounds.y, bounds.width, bounds.height);
            this.context.closePath();
            this.context.fill();
            this.context.stroke();
            this.context.restore();
        };
        return ColorMixer;
    }(ContextAwareObject));
    LayersVizualizer.ColorMixer = ColorMixer;
    var Tunnel = (function (_super) {
        __extends(Tunnel, _super);
        function Tunnel(minVal, maxVal, layers, context, paletteFunction, paletteFunctionSettings, isInverted) {
            if (isInverted === void 0) { isInverted = false; }
            var _this = _super.call(this, context) || this;
            _this.highlightLineWidth = 1;
            _this.lineWidth = 1;
            _this.hitboxLineWidth = 1;
            _this.lineColor = "#8c8c8c";
            _this.hitboxLineColor = "#173133";
            _this.highlightLineColor = '#000';
            _this.minVal = minVal;
            _this.maxVal = maxVal;
            _this.layers = layers;
            _this.paletteFunction = paletteFunction;
            _this.isInverted_ = isInverted;
            _this.paletteFunctionSettings = paletteFunctionSettings;
            _this.hasBounds = false;
            return _this;
        }
        Tunnel.prototype.setBounds = function (x, y, width, height) {
            this.bounds = { x: x, y: y, width: width, height: height };
            this.scale = {
                x: this.bounds.width / this.maxVal.x,
                y: this.bounds.height / this.maxVal.y
            };
            this.hasBounds = true;
        };
        Tunnel.prototype.clear = function (bounds) {
            var lineCorrection = this.getCorrectionWidth();
            this.context.clearRect(bounds.x - lineCorrection, bounds.y - lineCorrection, bounds.width + lineCorrection * 2, bounds.height + lineCorrection * 2);
        };
        Tunnel.prototype.getCorrectionWidth = function () {
            var width = Math.max(this.lineWidth, this.hitboxLineWidth);
            return Math.max(width, this.highlightLineWidth);
        };
        Tunnel.prototype.draw = function (x, y, width, height) {
            this.setBounds(x, y, width, height);
            this.clear(this.bounds);
            this.renderAllLayers();
            //Render hitboxes to canvas - dotted lines between layers
            this.renderHitboxes();
            this.paintBox();
            this.currentVisualPlain = this.context.getImageData(this.bounds.x, this.bounds.y, this.bounds.width + 1, this.bounds.height + 1);
            this.currentVisual = this.currentVisualPlain;
            //this.highlightHitbox(0);
        };
        Tunnel.prototype.renderHitboxes = function () {
            for (var i = 1; i < this.layers.length; i++) {
                this.renderHitbox(i);
            }
        };
        Tunnel.prototype.getHitboxes = function () {
            var rv = [];
            for (var i = 0; i < this.layers.length; i++) {
                rv.push(this.getHitbox(i));
            }
            return rv;
        };
        Tunnel.prototype.highlightHitbox = function (layerIdx) {
            this.clear(this.bounds);
            this.context.putImageData(this.currentVisual, this.bounds.x, this.bounds.y);
            var hitbox = this.getHitbox(layerIdx);
            var bottom = this.getBottom();
            this.drawSolidLine(hitbox.x, hitbox.y, hitbox.x + hitbox.width, hitbox.y, this.highlightLineWidth, this.highlightLineColor);
            this.drawSolidLine(hitbox.x + hitbox.width, hitbox.y, hitbox.x + hitbox.width, hitbox.y + hitbox.height, this.highlightLineWidth, this.highlightLineColor);
            this.drawSolidLine(hitbox.x + hitbox.width, hitbox.y + hitbox.height, hitbox.x, hitbox.y + hitbox.height, this.highlightLineWidth, this.highlightLineColor);
            this.drawSolidLine(hitbox.x, hitbox.y + hitbox.height, hitbox.x, hitbox.y, this.highlightLineWidth, this.highlightLineColor);
            //this.paintBox();
        };
        Tunnel.prototype.deselectLayer = function () {
            this.clear(this.bounds);
            this.currentVisual = this.currentVisualPlain;
            this.context.putImageData(this.currentVisual, this.bounds.x, this.bounds.y);
        };
        Tunnel.prototype.selectLayer = function (layerIdx) {
            this.clear(this.bounds);
            this.context.putImageData(this.currentVisual, this.bounds.x, this.bounds.y);
            var hitbox = this.getHitbox(layerIdx);
            var bottom = this.getBottom();
            this.drawSolidLine(hitbox.x, hitbox.y, hitbox.x + hitbox.width, hitbox.y, this.highlightLineWidth, "#ff0000");
            this.drawSolidLine(hitbox.x + hitbox.width, hitbox.y, hitbox.x + hitbox.width, hitbox.y + hitbox.height, this.highlightLineWidth, "#ff0000");
            this.drawSolidLine(hitbox.x + hitbox.width, hitbox.y + hitbox.height, hitbox.x, hitbox.y + hitbox.height, this.highlightLineWidth, "#ff0000");
            this.drawSolidLine(hitbox.x, hitbox.y + hitbox.height, hitbox.x, hitbox.y, this.highlightLineWidth, "#ff0000");
            this.currentVisual = this.context.getImageData(this.bounds.x, this.bounds.y, this.bounds.width + 1, this.bounds.height + 1);
        };
        Tunnel.prototype.paintBox = function () {
            var firstHitbox = this.getHitbox(0);
            var lastHitbox = this.getHitbox(this.layers.length - 1);
            var r = {
                sx: firstHitbox.x,
                sy: firstHitbox.y,
                ex: lastHitbox.x + lastHitbox.width,
                ey: lastHitbox.y + lastHitbox.height
            };
            this.drawSolidLine(r.sx, r.sy, r.ex, r.sy, this.lineWidth, this.lineColor);
            this.drawSolidLine(r.ex, r.sy, r.ex, r.ey, this.lineWidth, this.lineColor);
            this.drawSolidLine(r.ex, r.ey, r.sx, r.ey, this.lineWidth, this.lineColor);
            this.drawSolidLine(r.sx, r.ey, r.sx, r.sy, this.lineWidth, this.lineColor);
        };
        Tunnel.prototype.getScale = function () {
            if (!this.hasBounds) {
                return null;
            }
            return this.scale;
        };
        Tunnel.prototype.renderAllLayers = function () {
            this.context.save();
            //Mozilla odmita v urcitych pripadech v 1. polovine tunelu zobrazit barevny prechod kdyz je zapnuty clip()
            //this.clipToBounds(this.bounds);
            var gLine = {
                x0: this.bounds.x,
                y0: 0,
                x1: this.bounds.x + this.bounds.width,
                y1: 0
            };
            var gradient = this.context.createLinearGradient(gLine.x0, gLine.y0, gLine.x1, gLine.y1);
            var path = [];
            var lastColorStop = 0;
            for (var i = 0; i < this.layers.length; i++) {
                lastColorStop = this.prepareLayer(i, gradient, path, lastColorStop);
            }
            this.context.fillStyle = gradient;
            this.context.beginPath();
            this.drawPath(path);
            var scale = this.getScale();
            if (scale === null) {
                throw new Error("Value of scale not computed");
            }
            var restOfBody = [
                {
                    x: this.bounds.x + this.layers[this.layers.length - 1].end * scale.x,
                    y: this.getBottom()
                },
                {
                    x: this.bounds.x + this.layers[0].start * scale.x,
                    y: this.getBottom()
                },
                path[0]
            ];
            this.drawPath(restOfBody);
            this.context.closePath();
            this.context.fill();
            this.context.restore();
            this.context.save();
            this.clipToBounds(this.bounds);
            this.context.strokeStyle = this.lineColor;
            this.context.lineWidth = this.lineWidth;
            this.context.beginPath();
            this.context.moveTo(path[0].x, path[0].y);
            this.drawPath(path);
            this.drawPath(path.reverse());
            this.context.closePath();
            this.context.stroke();
            this.context.restore();
        };
        Tunnel.prototype.drawPath = function (path) {
            for (var i = 0; i < path.length; i++) {
                this.context.lineTo(path[i].x, path[i].y);
            }
        };
        Tunnel.prototype.prepareLayer = function (layerIdx, gradient, path, lastColorStop) {
            if (layerIdx < 0) {
                throw new Error("layerIdx must be greater or equal to 0");
            }
            var totalLenght = this.layers[this.layers.length - 1].end - this.layers[0].start;
            var currLength = this.layers[layerIdx].end - this.layers[0].start;
            var scale = this.getScale();
            if (scale === null) {
                throw new Error("Value of scale not computed in time!");
            }
            // Barvy gradientu
            var prevColorValue = ((layerIdx - 1) in this.layers)
                ? this.layers[layerIdx - 1].value
                : this.layers[layerIdx].value;
            var curColorValue = this.layers[layerIdx].value;
            var prevRadius = ((layerIdx - 1) in this.layers)
                ? this.layers[layerIdx - 1].radius
                : this.layers[layerIdx].radius;
            var bottom = this.getBottom();
            var end = this.layers[layerIdx].end;
            var start = this.layers[layerIdx].start;
            if (layerIdx > 0) {
                start = this.bounds.x + this.layers[layerIdx - 1].end * scale.x;
            }
            var inversionConstant = (this.isInverted()) ? (-1) : 1;
            if (layerIdx == 0) {
                path.push({
                    x: this.bounds.x + start * scale.x,
                    y: bottom - prevRadius * scale.y * inversionConstant
                });
            }
            path.push({
                x: this.bounds.x + end * scale.x,
                y: bottom - this.layers[layerIdx].radius * scale.y * inversionConstant
            });
            var color = this.paletteFunction(Number(prevColorValue), this.paletteFunctionSettings);
            var currentColorStop = 0;
            if (layerIdx != 0) {
                color = this.paletteFunction(Number(curColorValue), this.paletteFunctionSettings);
                currentColorStop = (currLength / totalLenght);
            }
            gradient.addColorStop(currentColorStop, color);
            return currentColorStop;
        };
        Tunnel.prototype.getHitbox = function (layerIdx) {
            return {
                x: this.layers[layerIdx].start,
                y: 0,
                width: this.layers[layerIdx].end - this.layers[layerIdx].start,
                height: this.maxVal.y,
                layerID: layerIdx
            };
        };
        Tunnel.prototype.moveTo = function (x, y) {
            var bottom = this.getBottom();
            var inversionKoeficient = 1;
            if (this.isInverted_) {
                inversionKoeficient = -1;
            }
            this.context.moveTo(this.bounds.x + x * this.scale.x, bottom - y * this.scale.y * inversionKoeficient);
        };
        Tunnel.prototype.lineTo = function (x, y) {
            var bottom = this.getBottom();
            var inversionKoeficient = 1;
            if (this.isInverted_) {
                inversionKoeficient = -1;
            }
            this.context.lineTo(this.bounds.x + x * this.scale.x, bottom - y * this.scale.y * inversionKoeficient);
        };
        Tunnel.prototype.drawSolidLine = function (sx, sy, ex, ey, lineWidth, strokeStyle) {
            if (lineWidth === void 0) { lineWidth = 1; }
            if (strokeStyle === void 0) { strokeStyle = "#000"; }
            this.context.save();
            this.clipToBounds(this.bounds);
            this.context.strokeStyle = strokeStyle;
            this.context.lineWidth = lineWidth;
            this.context.beginPath();
            this.moveTo(sx, sy);
            this.lineTo(ex, ey);
            this.context.closePath();
            this.context.stroke();
            this.context.restore();
        };
        Tunnel.prototype.renderHitbox = function (layerIdx) {
            if (layerIdx == 0) {
                return;
            }
            var scale = this.getScale();
            if (scale === null) {
                throw new Error("Value of scale has not been computed!");
            }
            var inversionConstant = (this.isInverted()) ? -1 : 1;
            var hitbox = this.getHitbox(layerIdx);
            var maxY = this.layers[layerIdx - 1].radius;
            var yStart = this.bounds.y
                + hitbox.y * scale.y
                + (this.isInverted() ? 0 : hitbox.height * scale.y - (maxY * scale.y))
                + this.lineWidth;
            var height = maxY * scale.y;
            var bgColor = "#ffffff";
            //Check if using HTML Canvas or SVG wraper, if so - get real bg color
            if (this.context.getImageData(0, 0, 1, 1) !== null
                && this.context.getImageData(0, 0, 1, 1) !== void 0) {
                bgColor = LayersVizualizer.Colors.rgbToHex(LayersVizualizer.Colors.Uint8ClampedArrayToRGB(this.context.getImageData(this.bounds.x + hitbox.x * scale.x, yStart + height / 2, 1, 1).data));
            }
            this.context.save();
            this.clipToBounds({
                x: this.bounds.x + hitbox.x * scale.x,
                y: yStart,
                width: hitbox.width * scale.x,
                height: height - this.lineWidth * 2
            });
            this.context.strokeStyle = LayersVizualizer.Colors.invertHexContrastGrayscale(bgColor); //this.lineColor;
            this.context.lineWidth = this.hitboxLineWidth;
            this.context.setLineDash([1, 3]);
            this.context.beginPath();
            this.moveTo(hitbox.x, hitbox.y);
            this.lineTo(hitbox.x, hitbox.y + hitbox.height);
            this.context.closePath();
            this.context.stroke();
            this.context.restore();
        };
        Tunnel.prototype.getBottom = function () {
            return (this.isInverted_)
                ? this.bounds.y
                : this.bounds.y + this.bounds.height;
        };
        Tunnel.prototype.getTop = function () {
            return (this.isInverted_)
                ? this.bounds.y + this.bounds.height
                : this.bounds.y;
        };
        Tunnel.prototype.isInverted = function () {
            return this.isInverted_;
        };
        return Tunnel;
    }(ContextAwareObject));
    LayersVizualizer.Tunnel = Tunnel;
})(LayersVizualizer || (LayersVizualizer = {}));
var LayersVizualizer;
(function (LayersVizualizer) {
    ;
    ;
    ;
    var Vizualizer = (function () {
        function Vizualizer(uiContainerId, settings) {
            this.verticalAxisChunkCount = 4;
            //Register instance
            if (Vizualizer.ACTIVE_INSTANCES == null) {
                Vizualizer.ACTIVE_INSTANCES = [];
            }
            this.publicInstanceIdx = Vizualizer.ACTIVE_INSTANCES.length;
            Vizualizer.ACTIVE_INSTANCES.push(this);
            this.uiContainerId = uiContainerId;
            this.configBySettings(settings);
            this.canvasId = "layer-vizualizer-canvas" + String(this.publicInstanceIdx);
            this.configureColors();
            this.__tunnels = {
                default: null,
                customizable: null
            };
            this.dataDirty = true;
            this.isDOMBound = false;
            this.currentLayerIdx = 0;
            this.tmpCanvasId = "tmpCanvas_" + this.publicInstanceIdx;
            this.selectedLayerIdx = -1;
            this.__colorFunctionSetings = new Map();
            //Dynamic canvas resizing
            this.resizePercentPrecision = 1; //5% difference between real and given => cause resizing of canvas
            window.addEventListener("resize", this.onWindowResize.bind(this));
            $(window).on("lvContentResize", this.onContentResize.bind(this));
        }
        Vizualizer.prototype.getPublicInstanceIdx = function () {
            return this.publicInstanceIdx;
        };
        Vizualizer.prototype.getCurrentColoringSettings = function (tunnelType) {
            return this.__colorFunctionSetings.get(tunnelType);
        };
        Vizualizer.prototype.setCurrentColorFunctionSettings = function (tunnelType, colorFunctionSetings) {
            this.__colorFunctionSetings.set(tunnelType, colorFunctionSetings);
        };
        Vizualizer.prototype.isDataDirty = function () {
            return this.dataDirty;
        };
        Vizualizer.prototype.getCanvas = function () {
            //DOM binding check
            if (!this.isDOMBound) {
                this.rebindDOMRefs();
            }
            return this.__canvas;
        };
        Vizualizer.prototype.getContext = function () {
            //DOM binding check
            if (!this.isDOMBound) {
                this.rebindDOMRefs();
            }
            return this.__context;
        };
        Vizualizer.prototype.getTunnels = function () {
            if (this.dataDirty) {
                return null;
            }
            return this.__tunnels;
        };
        Vizualizer.prototype.onWindowResize = function (e) {
            if (document.getElementById(this.canvasId) === null) {
                return;
            }
            var canvas = this.getCanvas();
            var context = this.getContext();
            if (canvas === void 0 || context === void 0 || !this.isElementVisible(canvas) || !CommonUtils.Tabs.isActive("left-tabs", "1")) {
                return;
            }
            var xUnit = canvas.width / 100;
            var yUnit = canvas.height / 100;
            var x_diff = Math.abs(canvas.width - canvas.offsetWidth) / xUnit;
            var y_diff = Math.abs(canvas.height - canvas.offsetHeight) / yUnit;
            if (x_diff < this.resizePercentPrecision
                && y_diff < this.resizePercentPrecision) {
                return;
            }
            this.resizeCanvas();
            this.vizualize();
            this.highlightHitbox(this.currentLayerIdx);
        };
        Vizualizer.prototype.isElementVisible = function (element) {
            if (element.style.display === "none" || element.style.visibility === "hidden") {
                return false;
            }
            if (element.parentElement === null || element.parentElement === void 0) {
                return true;
            }
            return this.isElementVisible(element.parentElement);
        };
        Vizualizer.prototype.onContentResize = function (e) {
            if (document.getElementById(this.canvasId) === null) {
                return;
            }
            var canvas = this.getCanvas();
            var context = this.getContext();
            if (canvas === void 0 || context === void 0 || !this.isElementVisible(canvas) || !CommonUtils.Tabs.isActive("left-tabs", "1")) {
                return;
            }
            this.resizeCanvas();
            this.vizualize();
            this.highlightHitbox(this.currentLayerIdx);
        };
        Vizualizer.prototype.resizeCanvas = function () {
            var canvas = this.getCanvas();
            var context = this.getContext();
            if (canvas === void 0 || context === void 0) {
                return;
            }
            context.clearRect(0, 0, canvas.width, canvas.height);
            canvas.setAttribute("width", String(canvas.offsetWidth));
            canvas.setAttribute("height", String(canvas.offsetHeight));
        };
        Vizualizer.prototype.configBySettings = function (settings) {
            this.coloringPropertyKey = "Hydropathy";
            if (settings.coloringProperty != null) {
                this.coloringPropertyKey = settings.coloringProperty.valueOf();
            }
            this.customColoringPropertyKey = this.coloringPropertyKey;
            this.useColorMinMax = true;
            if (settings.useColorMinMax != null) {
                this.useColorMinMax = settings.useColorMinMax.valueOf();
            }
            this.absCenterPositions = new Map();
            this.absCenterPositions.set("Polarity", 5);
            this.absCenterPositions.set("Hydropathy", 0);
            this.absCenterPositions.set("Hydrophobicity", 0);
            this.absCenterPositions.set("Mutability", 75);
            this.absCenterPositions.set("Charge", 0);
            this.absCenterPositions.set("NumPositives", 0);
            this.absCenterPositions.set("NumNegatives", 0);
            this.absColorValueMax = new Map();
            this.absColorValueMax.set("Polarity", 52);
            if (settings.colorMaxValue !== void 0 && settings.colorMaxValue.Polarity !== void 0) {
                this.absColorValueMax.set("Polarity", settings.colorMaxValue.Polarity.valueOf());
            }
            this.absColorValueMax.set("Mutability", 117);
            if (settings.colorMaxValue !== void 0 && settings.colorMaxValue.Mutability !== void 0) {
                this.absColorValueMax.set("Mutability", settings.colorMaxValue.Mutability.valueOf());
            }
            this.absColorValueMax.set("Hydropathy", 4.5);
            if (settings.colorMaxValue !== void 0 && settings.colorMaxValue.Hydropathy !== void 0) {
                this.absColorValueMax.set("Hydropathy", settings.colorMaxValue.Hydropathy.valueOf());
            }
            this.absColorValueMax.set("Hydrophobicity", 1.81);
            if (settings.colorMaxValue !== void 0 && settings.colorMaxValue.Hydrophobicity !== void 0) {
                this.absColorValueMax.set("Hydrophobicity", settings.colorMaxValue.Hydrophobicity.valueOf());
            }
            this.absColorValueMax.set("Charge", 5);
            if (settings.colorMaxValue !== void 0 && settings.colorMaxValue.Charge !== void 0) {
                this.absColorValueMax.set("Charge", settings.colorMaxValue.Charge.valueOf());
            }
            this.absColorValueMax.set("NumPositives", 5);
            if (settings.colorMaxValue !== void 0 && settings.colorMaxValue.NumPositives !== void 0) {
                this.absColorValueMax.set("NumPositives", settings.colorMaxValue.NumPositives.valueOf());
            }
            this.absColorValueMax.set("NumNegatives", 5);
            if (settings.colorMaxValue !== void 0 && settings.colorMaxValue.NumNegatives !== void 0) {
                this.absColorValueMax.set("NumNegatives", settings.colorMaxValue.NumNegatives.valueOf());
            }
            this.absColorValueMin = new Map();
            this.absColorValueMin.set("Polarity", 0);
            if (settings.colorMinValue !== void 0 && settings.colorMinValue.Polarity !== void 0) {
                this.absColorValueMin.set("Polarity", settings.colorMinValue.Polarity.valueOf());
            }
            this.absColorValueMin.set("Mutability", 25);
            if (settings.colorMinValue !== void 0 && settings.colorMinValue.Mutability !== void 0) {
                this.absColorValueMin.set("Mutability", settings.colorMinValue.Mutability.valueOf());
            }
            this.absColorValueMin.set("Hydropathy", -4.5);
            if (settings.colorMinValue !== void 0 && settings.colorMinValue.Hydropathy !== void 0) {
                this.absColorValueMin.set("Hydropathy", settings.colorMinValue.Hydropathy.valueOf());
            }
            this.absColorValueMin.set("Hydrophobicity", -1.14);
            if (settings.colorMinValue !== void 0 && settings.colorMinValue.Hydrophobicity !== void 0) {
                this.absColorValueMin.set("Hydrophobicity", settings.colorMinValue.Hydrophobicity.valueOf());
            }
            this.absColorValueMin.set("Charge", -5);
            if (settings.colorMinValue !== void 0 && settings.colorMinValue.Charge !== void 0) {
                this.absColorValueMin.set("Charge", settings.colorMinValue.Charge.valueOf());
            }
            this.absColorValueMin.set("NumPositives", 0);
            if (settings.colorMinValue !== void 0 && settings.colorMinValue.NumPositives !== void 0) {
                this.absColorValueMin.set("NumPositives", settings.colorMinValue.NumPositives.valueOf());
            }
            this.absColorValueMin.set("NumNegatives", 0);
            if (settings.colorMinValue !== void 0 && settings.colorMinValue.NumNegatives !== void 0) {
                this.absColorValueMin.set("NumNegatives", settings.colorMinValue.NumNegatives.valueOf());
            }
            this.radiusPropertyKey = "MinRadius";
            if (settings.radiusProperty != null) {
                this.radiusPropertyKey = settings.radiusProperty;
            }
            this.customRadiusPropertyKey = this.radiusPropertyKey;
            if (settings.customRadiusProperty != null) {
                this.customRadiusPropertyKey = settings.customRadiusProperty;
            }
            this.skipMiddle = false;
            if (settings.skipMiddleColor != null) {
                this.skipMiddle = settings.skipMiddleColor.valueOf();
            }
            this.topMarginPercent = 10;
            if (settings.topMargin != null) {
                this.topMarginPercent = settings.topMargin.valueOf();
            }
        };
        Vizualizer.prototype.configureColors = function () {
            var maxYellow = { r: 251, g: 255, b: 7 };
            var middleYellow = { r: 240, g: 248, b: 190 };
            var maxBlue = { r: 0, g: 0, b: 255 };
            var middleBlue = { r: 253, g: 253, b: 255 };
            var maxRed = { r: 255, g: 0, b: 0 };
            var middleRed = { r: 253, g: 253, b: 225 };
            var maxWhite = { r: 255, g: 255, b: 255 };
            var middleWhite = { r: 240, g: 240, b: 240 };
            this.minColor = {
                Hydropathy: maxBlue,
                Hydrophobicity: maxBlue,
                Mutability: maxBlue,
                Polarity: maxYellow,
                Charge: maxRed,
                NumPositives: maxWhite,
                NumNegatives: maxWhite
            };
            this.minColorMiddle = {
                Hydropathy: middleBlue,
                Hydrophobicity: middleBlue,
                Mutability: middleBlue,
                Polarity: middleYellow,
                Charge: middleRed,
                NumPositives: middleWhite,
                NumNegatives: middleWhite
            };
            this.maxColorMiddle = {
                Hydropathy: middleYellow,
                Hydrophobicity: middleYellow,
                Mutability: middleRed,
                Polarity: middleBlue,
                Charge: middleBlue,
                NumPositives: middleBlue,
                NumNegatives: middleRed
            };
            this.maxColor = {
                Hydropathy: maxYellow,
                Hydrophobicity: maxYellow,
                Mutability: maxRed,
                Polarity: maxBlue,
                Charge: maxBlue,
                NumPositives: maxBlue,
                NumNegatives: maxRed
            };
        };
        Vizualizer.prototype.deselectLayer = function () {
            this.selectedLayerIdx = -1;
            var tunnels = this.getTunnels();
            if (tunnels === null) {
                return;
            }
            if (tunnels.default !== null) {
                tunnels.default.tunnel.deselectLayer();
            }
            if (tunnels.customizable !== null) {
                tunnels.customizable.tunnel.deselectLayer();
            }
        };
        Vizualizer.prototype.selectLayer = function (layerIdx) {
            if (layerIdx < 0) {
                return;
            }
            this.selectedLayerIdx = layerIdx;
            var tunnels = this.getTunnels();
            if (tunnels === null) {
                return;
            }
            if (tunnels.default !== null) {
                tunnels.default.tunnel.selectLayer(layerIdx);
            }
            if (tunnels.customizable !== null) {
                tunnels.customizable.tunnel.selectLayer(layerIdx);
            }
        };
        Vizualizer.prototype.getSelectedLayer = function () {
            return this.selectedLayerIdx;
        };
        Vizualizer.prototype.setResizePercentPrecision = function (percentPrecision) {
            this.resizePercentPrecision = percentPrecision;
        };
        Vizualizer.prototype.getResizePercentPrecision = function () {
            return this.resizePercentPrecision;
        };
        Vizualizer.prototype.setColorBoundsMode = function (mode) {
            this.useColorMinMax = (mode == "Min/max");
        };
        Vizualizer.prototype.rebindDOMRefs = function () {
            var cnvs = document.getElementById(this.canvasId);
            if (cnvs == null) {
                throw new Error("Canvas element with id " + String(this.canvasId) + " not found");
            }
            this.__canvas = cnvs;
            var cntx = this.__canvas.getContext("2d");
            if (cntx == null) {
                throw new Error("Cannot obtain 2D canvas context");
            }
            this.__context = cntx;
            this.topAirBorderHeight = ((this.__canvas.height / 100) * this.topMarginPercent);
            this.isDOMBound = true;
            this.resizeCanvas();
        };
        /** Datasource change **/
        Vizualizer.prototype.setData = function (layersData) {
            this.currentLayerIdx = -1;
            this.selectedLayerIdx = -1;
            this.data = layersData;
            this.dataDirty = true;
        };
        Vizualizer.prototype.prepareData = function () {
            if (this.data.length == 0) {
                console.log("ERR: no data supplied!");
                return;
            }
            this.maxX = this.data[this.data.length - 1].EndDistance;
            this.maxY = this.data[0][this.radiusPropertyKey];
            this.customMaxY = this.data[0][this.customRadiusPropertyKey];
            var val = this.data[0].Properties[this.coloringPropertyKey];
            if (val == null) {
                throw new Error("Cannot init LayerVizualizer due to invalid settings - coloringProperty: "
                    + String(this.coloringPropertyKey));
            }
            this.minColoringValue = new Map();
            this.maxColoringValue = new Map();
            for (var key in this.data[0].Properties) {
                this.minColoringValue.set(key, this.data[0].Properties[key]);
                this.maxColoringValue.set(key, this.data[0].Properties[key]);
            }
            for (var i = 0; i < this.data.length; i++) {
                this.maxY = Math.max(this.maxY, this.data[i][this.radiusPropertyKey]);
                this.customMaxY = Math.max(this.customMaxY, this.data[i][this.customRadiusPropertyKey]);
                for (var key in this.data[i].Properties) {
                    var curVal = Number(this.data[i].Properties[key]);
                    if (curVal === void 0) {
                        throw new Error("Corrupted data!");
                    }
                    var oldMinVal = this.minColoringValue.get(key);
                    if (oldMinVal === void 0 || curVal.valueOf() < oldMinVal.valueOf()) {
                        this.minColoringValue.set(key, curVal.valueOf());
                    }
                    var oldMaxVal = this.maxColoringValue.get(key);
                    if (oldMaxVal === void 0 || curVal.valueOf() > oldMaxVal.valueOf()) {
                        this.maxColoringValue.set(key, curVal.valueOf());
                    }
                }
            }
            this.dataDirty = false;
            this.currentLayerIdx = 0;
        };
        /** Layer vizualization **/
        Vizualizer.prototype.getComponentsPositioning = function () {
            var canvas = this.getCanvas();
            if (canvas === null || canvas === void 0) {
                throw new Error("Canvas element is not bound!");
            }
            var currentWidth = canvas.width;
            var currentHeight = canvas.height;
            var colorMixerMinPxWidth = 150;
            var distanceLabelMinPxWidth = 80;
            var toRealPx = function (width, height, component) {
                return component.toBounds(width, height);
            };
            var toPercent = function (width, height, realX, realY) {
                return {
                    x: (realX / width) * 100,
                    y: (realY / height) * 100
                };
            };
            var positioning = {
                defaultTunnel: new LayersVizualizer.Component.Paintable(),
                customizableTunnel: new LayersVizualizer.Component.Paintable(),
                horizontalAxis: new LayersVizualizer.Component.Axis(),
                verticalAxis_1: new LayersVizualizer.Component.Axis(),
                verticalAxis_2: new LayersVizualizer.Component.Axis(),
                defaultColorMixer: new LayersVizualizer.Component.Paintable(),
                defaultColorMixerHorizontal: new LayersVizualizer.Component.Paintable(),
                customizableColorMixer: new LayersVizualizer.Component.Paintable(),
                customizableColorMixerHorizontal: new LayersVizualizer.Component.Paintable(),
                vAxis1TopLabel: new LayersVizualizer.Component.Positionable(),
                vAxis2BottomLabel: new LayersVizualizer.Component.Positionable(),
                axisLeftZeroLabel: new LayersVizualizer.Component.Positionable(),
                horizontalAxisRightLabel: new LayersVizualizer.Component.Positionable(),
                dColorMixerTopLabel: new LayersVizualizer.Component.Positionable(),
                dColorMixerBottomLabel: new LayersVizualizer.Component.Positionable(),
                dColorMixerLeftLabel: new LayersVizualizer.Component.Positionable(),
                dColorMixerRightLabel: new LayersVizualizer.Component.Positionable(),
                cColorMixerTopLabel: new LayersVizualizer.Component.Positionable(),
                cColorMixerBottomLabel: new LayersVizualizer.Component.Positionable(),
                cColorMixerLeftLabel: new LayersVizualizer.Component.Positionable(),
                cColorMixerRightLabel: new LayersVizualizer.Component.Positionable(),
                defaultCurlyBrackets: new LayersVizualizer.Component.Positionable(),
                customizableCurlyBrackets: new LayersVizualizer.Component.Positionable(),
                customizableCurlyBracketsLabel: new LayersVizualizer.Component.Positionable(),
                defaultCurlyBracketsLabel: new LayersVizualizer.Component.Positionable(),
                defaultArrowheadLine: new LayersVizualizer.Component.Positionable(),
                customizableArrowheadLine: new LayersVizualizer.Component.Positionable(),
                defaultArrowheadLineLabel: new LayersVizualizer.Component.Positionable(),
                customizableArrowheadLineLabel: new LayersVizualizer.Component.Positionable(),
                defaultColorMixerLabel: new LayersVizualizer.Component.Positionable(),
                customizableColorMixerLabel: new LayersVizualizer.Component.Positionable()
            };
            var dtHeight = 30; //35
            var dtTop = 13;
            var dtmTop = 0;
            var haTop = dtTop + dtmTop + dtHeight;
            var haHeight = 10;
            var smallLabelHeight = haHeight / 2;
            var dtWidth = 80;
            //Default tunnel
            {
                positioning.defaultTunnel.left = 8; //14
                positioning.defaultTunnel.top = dtTop;
                positioning.defaultTunnel.marginTop = dtmTop;
                positioning.defaultTunnel.marginLeft = 0;
                positioning.defaultTunnel.marginRight = 0;
                positioning.defaultTunnel.width = dtWidth;
                positioning.defaultTunnel.height = dtHeight; //38
            }
            //Customizable tunnel
            {
                positioning.customizableTunnel.left = positioning.defaultTunnel.left;
                positioning.customizableTunnel.marginTop = 2;
                positioning.customizableTunnel.marginLeft = 0;
                positioning.customizableTunnel.marginRight = 0;
                positioning.customizableTunnel.width = dtWidth;
                positioning.customizableTunnel.height = dtHeight;
                positioning.customizableTunnel.top = haTop + haHeight;
            }
            //Default Color Mixer
            {
                positioning.defaultColorMixer.left = positioning.defaultTunnel.left
                    + positioning.defaultTunnel.marginLeft
                    + positioning.defaultTunnel.width;
                positioning.defaultColorMixer.marginTop = 5;
                positioning.defaultColorMixer.marginLeft = 1;
                positioning.defaultColorMixer.width = 4;
                positioning.defaultColorMixer.height = positioning.defaultTunnel.height;
                positioning.defaultColorMixer.top = 0;
            }
            var cmhWidth = 100 - (positioning.defaultColorMixer.left);
            var cmhHeight = 4;
            //Default Color Mixer -- Horizontal
            {
                positioning.defaultColorMixerHorizontal.left = positioning.defaultTunnel.left
                    + positioning.customizableTunnel.width
                    - (cmhWidth);
                positioning.defaultColorMixerHorizontal.marginBottom = 1;
                positioning.defaultColorMixerHorizontal.width =
                    cmhWidth;
                positioning.defaultColorMixerHorizontal.top =
                    positioning.defaultTunnel.top
                        + positioning.defaultTunnel.marginTop
                        - (cmhHeight + 1 /*1=margin-bottom*/);
                positioning.defaultColorMixerHorizontal.height = cmhHeight;
            }
            //Customizable Color Mixer
            {
                positioning.customizableColorMixer.left = positioning.defaultColorMixer.left;
                positioning.customizableColorMixer.marginBottom = 5;
                positioning.customizableColorMixer.marginLeft = 1;
                positioning.customizableColorMixer.width = positioning.defaultColorMixer.width;
                positioning.customizableColorMixer.height = positioning.defaultColorMixer.height;
                positioning.customizableColorMixer.bottom = 0;
            }
            //Customizable Color Mixer -- Horizontal
            {
                positioning.customizableColorMixerHorizontal.left = positioning.customizableTunnel.left
                    + positioning.customizableTunnel.width
                    - (cmhWidth);
                positioning.customizableColorMixerHorizontal.marginTop = 1;
                positioning.customizableColorMixerHorizontal.marginBottom = 5;
                positioning.customizableColorMixerHorizontal.width =
                    cmhWidth;
                positioning.customizableColorMixerHorizontal.top =
                    positioning.customizableTunnel.top
                        + positioning.customizableTunnel.marginTop
                        + positioning.customizableTunnel.height;
                positioning.customizableColorMixerHorizontal.height = cmhHeight;
            }
            var colorMixerTooThin = (toRealPx(currentWidth, currentHeight, positioning.defaultColorMixerHorizontal).width < colorMixerMinPxWidth);
            if (colorMixerTooThin) {
                var width = toPercent(currentWidth, currentHeight, colorMixerMinPxWidth, 0).x;
                var x = positioning.defaultColorMixerHorizontal.left + (positioning.defaultColorMixerHorizontal.width - width);
                var colorMixerComponents = [
                    positioning.defaultColorMixerHorizontal,
                    positioning.customizableColorMixerHorizontal
                ];
                for (var _i = 0, colorMixerComponents_1 = colorMixerComponents; _i < colorMixerComponents_1.length; _i++) {
                    var component = colorMixerComponents_1[_i];
                    component.left = x;
                    component.width = width;
                }
            }
            //Horizontal Axis
            {
                positioning.horizontalAxis.left = positioning.defaultTunnel.left + positioning.defaultTunnel.marginLeft;
                positioning.horizontalAxis.top = haTop;
                positioning.horizontalAxis.marginLeft = 0;
                positioning.horizontalAxis.marginTop = 1;
                positioning.horizontalAxis.width = positioning.defaultTunnel.width;
                positioning.horizontalAxis.height = haHeight;
            }
            //Vertical Axis 1
            {
                positioning.verticalAxis_1.left = 0;
                positioning.verticalAxis_1.top = dtTop + dtmTop;
                positioning.verticalAxis_1.marginLeft = 4; //10
                positioning.verticalAxis_1.marginRight = 0;
                positioning.verticalAxis_1.width = 3;
                positioning.verticalAxis_1.height = positioning.defaultTunnel.height;
            }
            //Vertical Axis 2
            {
                positioning.verticalAxis_2.left = 0;
                positioning.verticalAxis_2.top = positioning.customizableTunnel.top + positioning.customizableTunnel.marginTop;
                positioning.verticalAxis_2.marginLeft = positioning.verticalAxis_1.marginLeft;
                positioning.verticalAxis_2.marginRight = 0;
                positioning.verticalAxis_2.width = 3;
                positioning.verticalAxis_2.height = positioning.verticalAxis_1.height;
            }
            var bigLabelHeight = positioning.horizontalAxis.height - (positioning.horizontalAxis.height / 8) * 2;
            //Left Common Axis Label
            {
                positioning.axisLeftZeroLabel.left = 0;
                positioning.axisLeftZeroLabel.marginLeft = 0;
                positioning.axisLeftZeroLabel.top = positioning.horizontalAxis.top
                    + ((positioning.horizontalAxis.marginTop === void 0) ? 0 : positioning.horizontalAxis.marginTop);
                positioning.axisLeftZeroLabel.marginTop =
                    Math.abs(bigLabelHeight - positioning.horizontalAxis.height) / 2;
                positioning.axisLeftZeroLabel.width = positioning.horizontalAxis.left - 1;
                positioning.axisLeftZeroLabel.height = bigLabelHeight;
            }
            //Right Horizontal Axis Label
            {
                positioning.horizontalAxisRightLabel.left = positioning.horizontalAxis.left + positioning.horizontalAxis.width + positioning.horizontalAxis.marginLeft;
                positioning.horizontalAxisRightLabel.marginLeft = positioning.defaultColorMixer.marginLeft;
                positioning.horizontalAxisRightLabel.top = positioning.axisLeftZeroLabel.top;
                positioning.horizontalAxisRightLabel.marginTop = positioning.axisLeftZeroLabel.marginTop;
                positioning.horizontalAxisRightLabel.width = 100 - (positioning.horizontalAxisRightLabel.left + positioning.horizontalAxisRightLabel.marginLeft);
                positioning.horizontalAxisRightLabel.height = positioning.axisLeftZeroLabel.height;
            }
            //Top Default Tunnel Vertical Axis Label
            {
                positioning.vAxis1TopLabel.left = 0;
                positioning.vAxis1TopLabel.marginLeft = 0;
                positioning.vAxis1TopLabel.top = positioning.defaultTunnel.top
                    - positioning.axisLeftZeroLabel.height / 2;
                positioning.vAxis1TopLabel.marginTop = 0;
                positioning.vAxis1TopLabel.width = positioning.verticalAxis_1.marginLeft
                    + ((positioning.verticalAxis_1.left === void 0) ? 0 : positioning.verticalAxis_1.left);
                positioning.vAxis1TopLabel.height = positioning.axisLeftZeroLabel.height;
            }
            //Bottom Customizable Tunnel Vertical Axis Label
            {
                positioning.vAxis2BottomLabel.left = 0;
                positioning.vAxis2BottomLabel.marginLeft = 0;
                positioning.vAxis2BottomLabel.bottom = 100
                    - (positioning.customizableTunnel.top + positioning.customizableTunnel.marginTop
                        + positioning.customizableTunnel.height + positioning.axisLeftZeroLabel.height / 2);
                positioning.vAxis2BottomLabel.marginBottom = 0;
                positioning.vAxis2BottomLabel.width = positioning.verticalAxis_2.marginLeft
                    + ((positioning.verticalAxis_2.left === void 0) ? 0 : positioning.verticalAxis_2.left);
                ;
                positioning.vAxis2BottomLabel.height = positioning.axisLeftZeroLabel.height;
            }
            //Top Default Color Mixer Label
            {
                positioning.dColorMixerTopLabel.left = positioning.defaultColorMixer.left
                    + positioning.defaultColorMixer.marginLeft
                    + positioning.defaultColorMixer.width;
                positioning.dColorMixerTopLabel.marginLeft = 1;
                positioning.dColorMixerTopLabel.top = positioning.defaultTunnel.top
                    + positioning.defaultTunnel.marginTop;
                positioning.dColorMixerTopLabel.marginTop = 0;
                positioning.dColorMixerTopLabel.width = 100
                    - (positioning.defaultColorMixer.left
                        + positioning.defaultColorMixer.marginLeft
                        + positioning.defaultColorMixer.width
                        + positioning.dColorMixerTopLabel.marginLeft);
                positioning.dColorMixerTopLabel.height = positioning.axisLeftZeroLabel.height;
            }
            //Bottom Default Color Mixer Label
            {
                positioning.dColorMixerBottomLabel.left = positioning.dColorMixerTopLabel.left;
                positioning.dColorMixerBottomLabel.marginLeft = positioning.dColorMixerTopLabel.marginLeft;
                positioning.dColorMixerBottomLabel.top =
                    ((positioning.defaultTunnel.top === void 0) ? 0 : positioning.defaultTunnel.top)
                        + positioning.defaultTunnel.marginTop
                        + positioning.defaultTunnel.height
                        - (positioning.axisLeftZeroLabel.height);
                positioning.dColorMixerBottomLabel.width = positioning.dColorMixerTopLabel.width;
                positioning.dColorMixerBottomLabel.height = positioning.axisLeftZeroLabel.height;
            }
            //Left Default Color Mixer Label
            {
                positioning.dColorMixerLeftLabel.left = positioning.defaultColorMixerHorizontal.left;
                positioning.dColorMixerLeftLabel.marginLeft = positioning.defaultColorMixerHorizontal.marginLeft;
                positioning.dColorMixerLeftLabel.top = positioning.defaultColorMixerHorizontal.top
                    - (smallLabelHeight + 1.5);
                positioning.dColorMixerLeftLabel.marginTop = 0;
                positioning.dColorMixerLeftLabel.width = positioning.defaultColorMixerHorizontal.width / 2;
                positioning.dColorMixerLeftLabel.height = smallLabelHeight;
            }
            //Right Default Color Mixer Label
            {
                positioning.dColorMixerRightLabel.left = positioning.defaultColorMixerHorizontal.left
                    + positioning.defaultColorMixerHorizontal.width - positioning.dColorMixerLeftLabel.width;
                positioning.dColorMixerRightLabel.marginRight = positioning.dColorMixerLeftLabel.marginLeft;
                positioning.dColorMixerRightLabel.top = positioning.dColorMixerLeftLabel.top;
                positioning.dColorMixerRightLabel.marginTop = positioning.dColorMixerLeftLabel.marginTop;
                positioning.dColorMixerRightLabel.width = positioning.dColorMixerLeftLabel.width;
                positioning.dColorMixerRightLabel.height = positioning.dColorMixerLeftLabel.height;
            }
            //Top Customizable Color Mixer Label
            {
                positioning.cColorMixerTopLabel.left = positioning.dColorMixerTopLabel.left;
                positioning.cColorMixerTopLabel.marginLeft = positioning.dColorMixerTopLabel.marginLeft;
                positioning.cColorMixerTopLabel.bottom =
                    ((positioning.customizableTunnel.bottom === void 0) ? 0 : positioning.customizableTunnel.bottom)
                        + positioning.customizableTunnel.height
                        - (positioning.axisLeftZeroLabel.height);
                positioning.cColorMixerTopLabel.marginBottom = 0;
                positioning.cColorMixerTopLabel.width = positioning.dColorMixerTopLabel.width;
                positioning.cColorMixerTopLabel.height = positioning.axisLeftZeroLabel.height;
            }
            //Bottom Customizable Color Mixer Label
            {
                positioning.cColorMixerBottomLabel.left = positioning.dColorMixerTopLabel.left;
                positioning.cColorMixerBottomLabel.marginLeft = positioning.dColorMixerTopLabel.marginLeft;
                positioning.cColorMixerBottomLabel.bottom = positioning.customizableTunnel.bottom;
                positioning.cColorMixerBottomLabel.marginBottom = positioning.customizableTunnel.marginBottom;
                positioning.cColorMixerBottomLabel.width = positioning.dColorMixerTopLabel.width;
                positioning.cColorMixerBottomLabel.height = positioning.axisLeftZeroLabel.height;
            }
            //Left Customizable Color Mixer Label
            {
                positioning.cColorMixerLeftLabel.left = positioning.customizableColorMixerHorizontal.left;
                positioning.cColorMixerLeftLabel.marginLeft = positioning.customizableColorMixerHorizontal.marginLeft;
                positioning.cColorMixerLeftLabel.top = positioning.customizableColorMixerHorizontal.top
                    + positioning.customizableColorMixerHorizontal.height
                    + positioning.customizableColorMixerHorizontal.marginTop;
                positioning.cColorMixerLeftLabel.marginTop = 2;
                positioning.cColorMixerLeftLabel.width = positioning.customizableColorMixerHorizontal.width / 2;
                positioning.cColorMixerLeftLabel.height = smallLabelHeight;
            }
            //Right Customizable Color Mixer Label
            {
                positioning.cColorMixerRightLabel.left = positioning.customizableColorMixerHorizontal.left
                    + positioning.customizableColorMixerHorizontal.width - positioning.cColorMixerLeftLabel.width;
                positioning.cColorMixerRightLabel.marginRight = positioning.cColorMixerLeftLabel.marginLeft;
                positioning.cColorMixerRightLabel.top = positioning.cColorMixerLeftLabel.top;
                positioning.cColorMixerRightLabel.marginTop = positioning.cColorMixerLeftLabel.marginTop;
                positioning.cColorMixerRightLabel.width = positioning.cColorMixerLeftLabel.width;
                positioning.cColorMixerRightLabel.height = positioning.cColorMixerLeftLabel.height;
            }
            //Curly brackets for default tunnel
            {
                positioning.defaultCurlyBrackets.left = positioning.defaultTunnel.left
                    + positioning.defaultTunnel.marginLeft + positioning.defaultTunnel.width;
                positioning.defaultCurlyBrackets.marginLeft = 0.3;
                positioning.defaultCurlyBrackets.top = dtTop;
                positioning.defaultCurlyBrackets.width = 1;
                positioning.defaultCurlyBrackets.height = dtHeight;
            }
            //Curly brackets for customizable tunnel
            {
                positioning.customizableCurlyBrackets.left = positioning.defaultTunnel.left
                    + positioning.defaultTunnel.marginLeft + positioning.defaultTunnel.width;
                positioning.customizableCurlyBrackets.marginLeft = 0.3;
                positioning.customizableCurlyBrackets.top = haTop + haHeight
                    + positioning.customizableTunnel.marginTop;
                positioning.customizableCurlyBrackets.width = 1;
                positioning.customizableCurlyBrackets.height = dtHeight;
            }
            //Curly brackets Label for default tunnel
            {
                positioning.defaultCurlyBracketsLabel.left = positioning.defaultCurlyBrackets.left
                    + positioning.defaultCurlyBrackets.width
                    + positioning.defaultCurlyBrackets.marginLeft;
                positioning.defaultCurlyBracketsLabel.marginLeft = 0.3;
                positioning.defaultCurlyBracketsLabel.top = positioning.defaultCurlyBrackets.top
                    + positioning.defaultCurlyBrackets.height / 2 - smallLabelHeight / 2;
                positioning.defaultCurlyBracketsLabel.width = 100 - positioning.defaultCurlyBracketsLabel.left;
                positioning.defaultCurlyBracketsLabel.height = smallLabelHeight;
            }
            //Curly brackets Label for customizable tunnel
            {
                positioning.customizableCurlyBracketsLabel.left = positioning.customizableCurlyBrackets.left
                    + positioning.customizableCurlyBrackets.width
                    + positioning.customizableCurlyBrackets.marginLeft;
                positioning.customizableCurlyBracketsLabel.marginLeft = 0.3;
                positioning.customizableCurlyBracketsLabel.top = positioning.customizableCurlyBrackets.top
                    + positioning.customizableCurlyBrackets.height / 2 - smallLabelHeight / 2;
                positioning.customizableCurlyBracketsLabel.width = 100 - positioning.customizableCurlyBracketsLabel.left;
                positioning.customizableCurlyBracketsLabel.height = smallLabelHeight;
            }
            var ahLineHeight = 4;
            var ahLineVerticalMargin = 1.5;
            var ahLineWidth = dtWidth / 2;
            //Arrowhead line for default tunnel
            {
                positioning.defaultArrowheadLine.left = positioning.defaultTunnel.left
                    + positioning.defaultTunnel.marginLeft + dtWidth / 4 //2
                    - (ahLineWidth) / 2;
                positioning.defaultArrowheadLine.top = dtTop - ahLineHeight - ahLineVerticalMargin;
                positioning.defaultArrowheadLine.width = ahLineWidth;
                positioning.defaultArrowheadLine.height = ahLineHeight;
            }
            //Arrowhead line for customizable tunnel
            {
                positioning.customizableArrowheadLine.left = positioning.defaultArrowheadLine.left;
                positioning.customizableArrowheadLine.marginTop = ahLineVerticalMargin;
                positioning.customizableArrowheadLine.top = positioning.customizableTunnel.top
                    + positioning.customizableTunnel.marginTop
                    + positioning.customizableTunnel.height;
                positioning.customizableArrowheadLine.width = ahLineWidth;
                positioning.customizableArrowheadLine.height = ahLineHeight;
            }
            var ahLineLabelWidth = ahLineWidth / 4;
            //Arrowhead line Label for default tunnel
            {
                positioning.defaultArrowheadLineLabel.left = positioning.customizableArrowheadLine.left
                    + ahLineWidth / 2 - ahLineLabelWidth / 2;
                positioning.defaultArrowheadLineLabel.top = positioning.defaultArrowheadLine.top;
                positioning.defaultArrowheadLineLabel.width = ahLineLabelWidth;
                positioning.defaultArrowheadLineLabel.height = ahLineHeight;
            }
            //Arrowhead line Label for customizable tunnel
            {
                positioning.customizableArrowheadLineLabel.left = positioning.customizableArrowheadLine.left
                    + ahLineWidth / 2 - ahLineLabelWidth / 2;
                positioning.customizableArrowheadLineLabel.top = positioning.customizableArrowheadLine.top
                    + positioning.customizableArrowheadLine.marginTop;
                positioning.customizableArrowheadLineLabel.width = ahLineLabelWidth;
                positioning.customizableArrowheadLineLabel.height = ahLineHeight;
            }
            var cmLabelWidth = positioning.defaultColorMixerHorizontal.width / 2.5;
            var cmLabelHeight = positioning.defaultColorMixerHorizontal.height;
            //Color mixer Label for default tunnel
            {
                positioning.defaultColorMixerLabel.left = positioning.defaultColorMixerHorizontal.left
                    + positioning.defaultColorMixerHorizontal.width / 2 - cmLabelWidth / 2;
                positioning.defaultColorMixerLabel.top = positioning.dColorMixerLeftLabel.top;
                positioning.defaultColorMixerLabel.width = cmLabelWidth;
                positioning.defaultColorMixerLabel.height = cmLabelHeight;
            }
            //Color mixer Label for customizable tunnel
            {
                positioning.customizableColorMixerLabel.left = positioning.defaultColorMixerHorizontal.left
                    + positioning.defaultColorMixerHorizontal.width / 2 - cmLabelWidth / 2;
                positioning.customizableColorMixerLabel.marginTop = 0.5;
                positioning.customizableColorMixerLabel.top = positioning.cColorMixerLeftLabel.top
                    + positioning.cColorMixerLeftLabel.marginTop;
                positioning.customizableColorMixerLabel.width = cmLabelWidth;
                positioning.customizableColorMixerLabel.height = cmLabelHeight;
            }
            if (colorMixerTooThin) {
                var emptySpaceX = positioning.defaultColorMixerHorizontal.left - positioning.defaultTunnel.left - 2;
                var fallDownLeft = positioning.defaultTunnel.left;
                var distanceLabelComponents = [
                    positioning.defaultArrowheadLine,
                    positioning.customizableArrowheadLine
                ];
                for (var _a = 0, distanceLabelComponents_1 = distanceLabelComponents; _a < distanceLabelComponents_1.length; _a++) {
                    var component = distanceLabelComponents_1[_a];
                    component.width = emptySpaceX;
                    component.left = positioning.defaultTunnel.left + emptySpaceX / 2 - component.width / 2;
                    if (component.left < fallDownLeft) {
                        component.left = fallDownLeft;
                    }
                }
                var labelX = (positioning.defaultArrowheadLine.left === void 0) ? 0 : positioning.defaultArrowheadLine.left;
                var labelWidth = (positioning.defaultArrowheadLine.width === void 0) ? 0 : positioning.defaultArrowheadLine.width;
                var distanceLabelTextComponents = [
                    positioning.defaultArrowheadLineLabel,
                    positioning.customizableArrowheadLineLabel
                ];
                for (var _b = 0, distanceLabelTextComponents_1 = distanceLabelTextComponents; _b < distanceLabelTextComponents_1.length; _b++) {
                    var component = distanceLabelTextComponents_1[_b];
                    var cWidth = (component.width === void 0) ? 0 : component.width;
                    component.left = labelX + labelWidth / 2 - cWidth / 2;
                }
            }
            return positioning;
        };
        Vizualizer.prototype.prepareLayersForVizualization = function () {
            var defaultTunnelLayers = [];
            var customizableTunnelLayers = [];
            for (var i = 0; i < this.data.length; i++) {
                var defaultTunnelLayer = {
                    id: i,
                    start: this.data[i].StartDistance,
                    end: this.data[i].EndDistance,
                    value: Number(this.data[i].Properties[this.coloringPropertyKey]).valueOf(),
                    radius: this.data[i][this.radiusPropertyKey]
                };
                var customizableTunnelLayer = {
                    id: i,
                    start: this.data[i].StartDistance,
                    end: this.data[i].EndDistance,
                    value: Number(this.data[i].Properties[this.customColoringPropertyKey]).valueOf(),
                    radius: this.data[i][this.customRadiusPropertyKey]
                };
                defaultTunnelLayers.push(defaultTunnelLayer);
                customizableTunnelLayers.push(customizableTunnelLayer);
            }
            return {
                defaultTunnelLayers: defaultTunnelLayers,
                customizableTunnelLayers: customizableTunnelLayers
            };
        };
        Vizualizer.prototype.getMaxY = function (realMaxYValue) {
            var maxY = Math.ceil(realMaxYValue);
            var chunkSize = maxY / this.verticalAxisChunkCount;
            if (maxY - realMaxYValue < chunkSize / 2) {
                maxY += Math.ceil(chunkSize / 2);
            }
            return maxY;
        };
        Vizualizer.prototype.prepareTunnelObject = function (minVal, maxVal, center, context, tunnelLayers, isDefaultTunnel) {
            var coloringProperty = ((isDefaultTunnel) ? this.coloringPropertyKey : this.customColoringPropertyKey);
            var colorFunctionSettings = {
                minVal: minVal,
                maxVal: maxVal,
                minColor: this.minColor[coloringProperty],
                maxColor: this.maxColor[coloringProperty],
                minColorMiddle: this.minColorMiddle[coloringProperty],
                maxColorMiddle: this.maxColorMiddle[coloringProperty],
                skipMiddle: (coloringProperty == "NumPositives" || coloringProperty == "NumNegatives")
                    ? true
                    : this.skipMiddle,
                centerPosition: center,
                centerAbsolute: (coloringProperty == "NumPositives" || coloringProperty == "NumNegatives")
                    ? false
                    : !this.useColorMinMax
            };
            var maxY = this.getMaxY((isDefaultTunnel) ? this.maxY : this.customMaxY);
            return {
                tunnel: new LayersVizualizer.Tunnel({
                    x: 0,
                    y: 0
                }, {
                    x: this.maxX,
                    y: maxY
                }, tunnelLayers, context, this.getColor, colorFunctionSettings, !isDefaultTunnel),
                colorFunctionSettings: colorFunctionSettings
            };
        };
        Vizualizer.prototype.renderObjects = function (renderable) {
            for (var _i = 0, renderable_1 = renderable; _i < renderable_1.length; _i++) {
                var obj = renderable_1[_i];
                obj.drawable.drawFromBounds(obj.bounds);
            }
        };
        Vizualizer.prototype.vizualize = function (renderHitboxes) {
            if (renderHitboxes === void 0) { renderHitboxes = true; }
            this.resizeCanvas();
            var canvasWidth = this.getCanvas().width;
            var canvasHeight = this.getCanvas().height;
            var context = this.getContext();
            //console.log(canvasWidth);
            //console.log(canvasHeight);
            var toRender = [];
            //Data was not prepared yet
            if (this.dataDirty) {
                this.prepareData();
            }
            //Prepare layers data
            var layers = this.prepareLayersForVizualization();
            var maxDistance = layers.defaultTunnelLayers[layers.defaultTunnelLayers.length - 1].end;
            maxDistance = CommonUtils.Numbers.roundToDecimal(maxDistance, 1); // round to 1 decimal
            var positioning = this.getComponentsPositioning();
            //Prepare default tunnel object
            var dTminVal = (this.useColorMinMax) ? this.minColoringValue.get(this.coloringPropertyKey) : this.absColorValueMin.get(this.coloringPropertyKey);
            if (dTminVal == void 0) {
                throw Error("Minimal value for property '" + this.coloringPropertyKey + "' was not found!");
            }
            var dTmaxVal = (this.useColorMinMax) ? this.maxColoringValue.get(this.coloringPropertyKey) : this.absColorValueMax.get(this.coloringPropertyKey);
            if (dTmaxVal == void 0) {
                throw Error("Maximal value for property '" + this.coloringPropertyKey + "' was not found!");
            }
            var dTcenter = this.absCenterPositions.get(this.coloringPropertyKey);
            if (dTcenter === void 0) {
                dTcenter = 0;
            }
            var defaultTunnelData = this.prepareTunnelObject(dTminVal, dTmaxVal, dTcenter, context, layers.defaultTunnelLayers, true);
            var defaultTunnelBounds = positioning.defaultTunnel.toBounds(canvasWidth, canvasHeight);
            toRender.push({
                drawable: defaultTunnelData.tunnel,
                bounds: defaultTunnelBounds
            });
            //Prepare customizable tunnel object
            var cTminVal = (this.useColorMinMax) ? this.minColoringValue.get(this.customColoringPropertyKey) : this.absColorValueMin.get(this.customColoringPropertyKey);
            if (cTminVal == void 0) {
                throw Error("Minimal value for property '" + this.customColoringPropertyKey + "' was not found!");
            }
            var cTmaxVal = (this.useColorMinMax) ? this.maxColoringValue.get(this.customColoringPropertyKey) : this.absColorValueMax.get(this.customColoringPropertyKey);
            if (cTmaxVal == void 0) {
                throw Error("Maximal value for property '" + this.customColoringPropertyKey + "' was not found!");
            }
            var cTcenter = this.absCenterPositions.get(this.customColoringPropertyKey);
            if (cTcenter === void 0) {
                cTcenter = 0;
            }
            var customizableTunnelData = this.prepareTunnelObject(cTminVal, cTmaxVal, cTcenter, context, layers.customizableTunnelLayers, false);
            var customizableTunnelBounds = positioning.customizableTunnel.toBounds(canvasWidth, canvasHeight);
            toRender.push({
                drawable: customizableTunnelData.tunnel,
                bounds: customizableTunnelBounds
            });
            this.__tunnels.default = {
                tunnel: defaultTunnelData.tunnel,
                bounds: defaultTunnelBounds
            };
            this.__tunnels.customizable = {
                tunnel: customizableTunnelData.tunnel,
                bounds: customizableTunnelBounds
            };
            //console.log(this.__tunnels);
            //Prepare color mixer objects
            //Color mixer for default tunnel
            /* //Vertical
            toRender.push({
                drawable: new ColorMixer(dTminVal,dTmaxVal,context,this.getColor,defaultTunnelData.colorFunctionSettings),
                bounds: positioning.defaultColorMixer.toBounds(canvasWidth,canvasHeight)
            });
            */
            //Horizontal
            toRender.push({
                drawable: new LayersVizualizer.ColorMixer(dTminVal, dTmaxVal, context, this.getColor, defaultTunnelData.colorFunctionSettings, true),
                bounds: positioning.defaultColorMixerHorizontal.toBounds(canvasWidth, canvasHeight)
            });
            //Color mixer for customizable tunnel
            /* //Vertical
            toRender.push({
                drawable: new ColorMixer(cTminVal,cTmaxVal,context,this.getColor,customizableTunnelData.colorFunctionSettings),
                bounds: positioning.customizableColorMixer.toBounds(canvasWidth,canvasHeight)
            });
            */
            //Horizontal
            toRender.push({
                drawable: new LayersVizualizer.ColorMixer(cTminVal, cTmaxVal, context, this.getColor, customizableTunnelData.colorFunctionSettings, true),
                bounds: positioning.customizableColorMixerHorizontal.toBounds(canvasWidth, canvasHeight)
            });
            //Prepare horizontal axis
            toRender.push({
                drawable: new LayersVizualizer.Axis(0, this.maxX, context, 10, true, 20, 1.6),
                bounds: positioning.horizontalAxis.toBounds(canvasWidth, canvasHeight)
            });
            //Prepare vertical axis
            toRender.push({
                drawable: new LayersVizualizer.Axis(0, this.getMaxY(this.maxY), context, this.verticalAxisChunkCount, false, 30, 1.6),
                bounds: positioning.verticalAxis_1.toBounds(canvasWidth, canvasHeight)
            });
            toRender.push({
                drawable: new LayersVizualizer.Axis(0, this.getMaxY(this.customMaxY), context, this.verticalAxisChunkCount, false, 30, 1.6),
                bounds: positioning.verticalAxis_2.toBounds(canvasWidth, canvasHeight)
            });
            //Prepare labels
            // Label on left side of horizontal axis
            toRender.push({
                drawable: new LayersVizualizer.TextBox("0 Å", context, "big", "right"),
                bounds: positioning.axisLeftZeroLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Label on right side of horizontal axis
            toRender.push({
                drawable: new LayersVizualizer.TextBox(maxDistance + " \u00C5", context, "big", "left"),
                bounds: positioning.horizontalAxisRightLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Label on top left side of vertical axis for default tunnel
            toRender.push({
                drawable: new LayersVizualizer.TextBox(this.getMaxY(this.maxY) + " \u00C5", context, "medium", "right"),
                bounds: positioning.vAxis1TopLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Label on bottom left side of vertical axis for customizable tunnel
            toRender.push({
                drawable: new LayersVizualizer.TextBox(this.getMaxY(this.customMaxY) + " \u00C5", context, "medium", "right"),
                bounds: positioning.vAxis2BottomLabel.toBounds(canvasWidth, canvasHeight)
            });
            /*
            // Label on top right side of color mixer for default tunnel
            toRender.push({
                drawable: new TextBox(`${dTmaxVal}`,context,"medium","left"),
                bounds: positioning.dColorMixerTopLabel.toBounds(canvasWidth,canvasHeight)
            });
            // Label on bottom right side of color mixer for default tunnel
            toRender.push({
                drawable: new TextBox(`${dTminVal}`,context,"medium","left"),
                bounds: positioning.dColorMixerBottomLabel.toBounds(canvasWidth,canvasHeight)
            });
            */
            // Label on top left side of color mixer for default tunnel
            toRender.push({
                drawable: new LayersVizualizer.TextBox("" + CommonUtils.Numbers.roundToDecimal(dTminVal, 2), context, "small", "left"),
                bounds: positioning.dColorMixerLeftLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Label on top right side of color mixer for default tunnel
            toRender.push({
                drawable: new LayersVizualizer.TextBox("" + CommonUtils.Numbers.roundToDecimal(dTmaxVal, 2), context, "small", "right"),
                bounds: positioning.dColorMixerRightLabel.toBounds(canvasWidth, canvasHeight)
            });
            /*
            // Label on top right side of color mixer for customizable tunnel
            toRender.push({
                drawable: new TextBox(`${cTmaxVal}`,context,"medium","left"),
                bounds: positioning.cColorMixerTopLabel.toBounds(canvasWidth,canvasHeight)
            });
            // Label on bottom right side of color mixer for customizable tunnel
            toRender.push({
                drawable: new TextBox(`${cTminVal}`,context,"medium","left"),
                bounds: positioning.cColorMixerBottomLabel.toBounds(canvasWidth,canvasHeight)
            });
            */
            // Label on bottom left side of color mixer for customizable tunnel
            toRender.push({
                drawable: new LayersVizualizer.TextBox("" + CommonUtils.Numbers.roundToDecimal(cTminVal, 2), context, "small", "left"),
                bounds: positioning.cColorMixerLeftLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Label on bottom right side of color mixer for customizable tunnel
            toRender.push({
                drawable: new LayersVizualizer.TextBox("" + CommonUtils.Numbers.roundToDecimal(cTmaxVal, 2), context, "small", "right"),
                bounds: positioning.cColorMixerRightLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Curly brackets for default tunnel
            toRender.push({
                drawable: new LayersVizualizer.CurlyBrackets(context /*,true*/),
                bounds: positioning.defaultCurlyBrackets.toBounds(canvasWidth, canvasHeight)
            });
            // Curly brackets Label for default tunnel
            toRender.push({
                drawable: new LayersVizualizer.TextBox("" + this.radiusPropertyKey, context, "small", "left"),
                bounds: positioning.defaultCurlyBracketsLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Curly brackets for customizable tunnel
            toRender.push({
                drawable: new LayersVizualizer.CurlyBrackets(context /*,true*/),
                bounds: positioning.customizableCurlyBrackets.toBounds(canvasWidth, canvasHeight)
            });
            // Curly brackets Label for customizable tunnel
            toRender.push({
                drawable: new LayersVizualizer.TextBox("" + this.customRadiusPropertyKey, context, "small", "left"),
                bounds: positioning.customizableCurlyBracketsLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Arrowhead line for default tunnel
            toRender.push({
                drawable: new LayersVizualizer.ArrowHeadLine(context, true),
                bounds: positioning.defaultArrowheadLine.toBounds(canvasWidth, canvasHeight)
            });
            // Arrowhead line Label for default tunnel
            toRender.push({
                drawable: new LayersVizualizer.TextBox("Distance", context, "small", "center"),
                bounds: positioning.defaultArrowheadLineLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Arrowhead line for customizable tunnel
            toRender.push({
                drawable: new LayersVizualizer.ArrowHeadLine(context, true),
                bounds: positioning.customizableArrowheadLine.toBounds(canvasWidth, canvasHeight)
            });
            // Arrowhead line Label for customizable tunnel
            toRender.push({
                drawable: new LayersVizualizer.TextBox("Distance", context, "small", "center"),
                bounds: positioning.customizableArrowheadLineLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Default color mixer Label
            toRender.push({
                drawable: new LayersVizualizer.TextBox("" + this.coloringPropertyKey, context, "small", "center"),
                bounds: positioning.defaultColorMixerLabel.toBounds(canvasWidth, canvasHeight)
            });
            // Customizable color mixer Label
            toRender.push({
                drawable: new LayersVizualizer.TextBox("" + this.customColoringPropertyKey, context, "small", "center"),
                bounds: positioning.customizableColorMixerLabel.toBounds(canvasWidth, canvasHeight)
            });
            this.renderObjects(toRender);
            if (this.selectedLayerIdx !== -1) {
                this.selectLayer(this.selectedLayerIdx);
            }
            this.setCurrentColorFunctionSettings("default", defaultTunnelData.colorFunctionSettings);
            this.setCurrentColorFunctionSettings("customizable", customizableTunnelData.colorFunctionSettings);
        };
        Vizualizer.prototype.switchToMainCanvas = function () {
            var tmpCanvas = document.getElementById(this.tmpCanvasId);
            if (tmpCanvas !== null) {
                tmpCanvas.remove();
            }
            this.rebindDOMRefs();
            this.vizualize();
            this.highlightHitbox(this.currentLayerIdx);
        };
        Vizualizer.prototype.switchToTmpCanvas = function () {
            var canvas = this.getCanvas();
            if (canvas.id === this.tmpCanvasId) {
                throw new Error("Trying to switch to tmp canvas from tmp canvas! Maybe forgotten SwitchToMain(..)?");
            }
            var tmpCanvas = document.createElement("canvas");
            tmpCanvas.style.position = "absolute";
            tmpCanvas.style.top = "-1000px";
            tmpCanvas.id = this.tmpCanvasId;
            var targetWidth = 1920;
            tmpCanvas.width = targetWidth;
            tmpCanvas.height = (targetWidth / canvas.width) * canvas.height;
            document.body.appendChild(tmpCanvas);
            var oldCtx = this.getContext();
            var tmpCtx = tmpCanvas.getContext("2d");
            if (tmpCtx === null) {
                throw new Error("Unable initiate new 2D canvas context");
            }
            this.__context = tmpCtx;
            this.__canvas = tmpCanvas;
        };
        Vizualizer.prototype.wrapSVG = function () {
            var canvas = this.getCanvas();
            var ctx = new C2S(canvas.width, canvas.height);
            if (ctx === null) {
                throw new Error("Unable to initialize new drawing context!");
            }
            this.__context = ctx;
        };
        Vizualizer.prototype.unwrapSVG = function () {
            var ctx = this.getCanvas().getContext("2d");
            if (ctx === null) {
                throw new Error("Unable to initialize new drawing context!");
            }
            this.__context = ctx;
        };
        Vizualizer.prototype.exportImage = function () {
            if (!this.isDOMBound || this.isDataDirty()) {
                throw new Error("Data not prepared!");
            }
            //Deselekce vrstvy
            var selectedLayer = -1;
            if (this.selectedLayerIdx !== -1) {
                selectedLayer = this.selectedLayerIdx;
                this.deselectLayer();
            }
            this.switchToTmpCanvas();
            this.vizualize();
            var dataURL = this.getCanvas().toDataURL("image/png");
            this.switchToMainCanvas();
            //Opetovne oznaceni vrstvy(stav pred exportem)
            this.selectLayer(selectedLayer);
            return dataURL;
        };
        Vizualizer.prototype.getSVGDataURL = function () {
            var svg = this.getSVGData();
            var xmlSerializer = new XMLSerializer();
            var serializedSVG = "<?xml version=\"1.0\" encoding=\"utf-8\"?>" + xmlSerializer.serializeToString(svg);
            serializedSVG = utf8.encode(serializedSVG);
            return "data:image/svg+xml;charset=utf-8;base64," + btoa(serializedSVG);
        };
        Vizualizer.prototype.getSVGData = function () {
            var ctx = this.getContext();
            ctx.getSerializedSvg();
            var svg = ctx.getSvg();
            svg.charset = "UTF-8";
            return svg;
        };
        Vizualizer.prototype.exportSVGImage = function () {
            if (!this.isDOMBound || this.isDataDirty()) {
                throw new Error("Data not prepared!");
            }
            //Deselekce vrstvy
            var selectedLayer = -1;
            if (this.selectedLayerIdx !== -1) {
                selectedLayer = this.selectedLayerIdx;
                this.deselectLayer();
            }
            this.switchToTmpCanvas();
            this.wrapSVG();
            this.vizualize();
            var svg = this.getSVGDataURL();
            this.unwrapSVG();
            this.switchToMainCanvas();
            //Opetovne oznaceni vrstvy(stav pred exportem)
            this.selectLayer(selectedLayer);
            return svg;
        };
        Vizualizer.prototype.exportPDF = function () {
            if (!this.isDOMBound || this.isDataDirty()) {
                throw new Error("Data not prepared!");
            }
            //Deselekce vrstvy
            var selectedLayer = -1;
            if (this.selectedLayerIdx !== -1) {
                selectedLayer = this.selectedLayerIdx;
                this.deselectLayer();
            }
            this.switchToTmpCanvas();
            this.wrapSVG();
            var canvas = this.getCanvas();
            if (canvas === void 0 || canvas === null) {
                throw new Error("Canvas element not initiated");
            }
            var width = canvas.width;
            var height = canvas.height;
            this.vizualize();
            var svg = this.getSVGData();
            this.unwrapSVG();
            this.switchToMainCanvas();
            // create a new jsPDF instance
            var pdf = new jsPDF('p', 'pt', [width, height]);
            pdf.setProperties({
                title: "Report"
            });
            //console.log(svg);
            //pdf.addImage(this.exportSVGImage(),0,0,200,500);
            //pdf.addSVG(svg,0,0,width,height);
            // render the svg element
            svg2pdf(svg, pdf, {
                xOffset: 0,
                yOffset: 0,
                scale: 1
            });
            //pdf.addSVG(svg, 0, 0, width, height);
            //Opetovne oznaceni vrstvy(stav pred exportem)
            this.selectLayer(selectedLayer);
            return pdf.output('datauristring');
        };
        Vizualizer.prototype.setCustomColoringPropertyKey = function (coloringPropertyKey) {
            this.customColoringPropertyKey = coloringPropertyKey;
        };
        Vizualizer.prototype.getCustomColoringPropertyKey = function () {
            return this.customColoringPropertyKey;
        };
        Vizualizer.prototype.setColoringPropertyKey = function (coloringPropertyKey) {
            this.coloringPropertyKey = coloringPropertyKey;
        };
        Vizualizer.prototype.getColoringPropertyKey = function () {
            return this.coloringPropertyKey;
        };
        Vizualizer.prototype.setCustomRadiusPropertyKey = function (radiusPropertyKey) {
            if (this.customRadiusPropertyKey !== radiusPropertyKey) {
                this.customRadiusPropertyKey = radiusPropertyKey;
                this.dataDirty = true;
            }
        };
        Vizualizer.prototype.getCustomRadiusPropertyKey = function () {
            return this.customRadiusPropertyKey;
        };
        Vizualizer.prototype.setRadiusPropertyKey = function (radiusPropertyKey) {
            if (this.radiusPropertyKey !== radiusPropertyKey) {
                this.radiusPropertyKey = radiusPropertyKey;
                this.dataDirty = true;
            }
        };
        Vizualizer.prototype.getRadiusPropertyKey = function () {
            return this.radiusPropertyKey;
        };
        Vizualizer.prototype.getHitboxes = function () {
            var tunnels = this.getTunnels();
            if (tunnels === null) {
                return null;
            }
            return {
                defaultTunnel: (tunnels.default !== null)
                    ? tunnels.default.tunnel.getHitboxes()
                    : null,
                customizable: (tunnels.customizable !== null)
                    ? tunnels.customizable.tunnel.getHitboxes()
                    : null,
            };
        };
        Vizualizer.prototype.renderHitboxes = function () {
            //Data was not prepared yet
            if (this.dataDirty) {
                this.prepareData();
            }
            var tunnels = this.getTunnels();
            if (tunnels === null) {
                return [];
            }
            if (tunnels.default !== null) {
                tunnels.default.tunnel.renderHitboxes();
            }
            if (tunnels.customizable !== null) {
                tunnels.customizable.tunnel.renderHitboxes();
            }
        };
        Vizualizer.prototype.highlightHitbox = function (layerIdx) {
            if (layerIdx < 0) {
                return;
            }
            this.currentLayerIdx = layerIdx;
            var tunnels = this.getTunnels();
            if (tunnels === null) {
                return;
            }
            if (tunnels.default !== null) {
                tunnels.default.tunnel.highlightHitbox(layerIdx);
            }
            if (tunnels.customizable !== null) {
                tunnels.customizable.tunnel.highlightHitbox(layerIdx);
            }
        };
        /** Helpers **/
        Vizualizer.prototype.getColor = function (value, settings) {
            var minVal = settings.minVal;
            var maxVal = settings.maxVal;
            var minColor = settings.minColor;
            var maxColor = settings.maxColor;
            var minColorMiddle = settings.minColorMiddle;
            var maxColorMiddle = settings.maxColorMiddle;
            var skipMiddle = settings.skipMiddle;
            var middle = (settings.centerAbsolute) ? settings.centerPosition : (minVal + maxVal) / 2;
            var rgb;
            if (value < (minVal + maxVal) / 2) {
                rgb = ChannelDbPlugin.Palette.interpolate(minVal, minColor, middle, maxColorMiddle, value);
            }
            else {
                rgb = ChannelDbPlugin.Palette.interpolate(middle, minColorMiddle, maxVal, maxColor, value);
            }
            if (skipMiddle && settings.centerAbsolute) {
                throw new Error("Cannot config absolute center and skip center at once! Forbidden configuration -> skipMiddle=true && centerAbsolute=true");
            }
            if (skipMiddle && !settings.centerAbsolute) {
                rgb = ChannelDbPlugin.Palette.interpolate(minVal, minColor, maxVal, maxColor, value);
            }
            if (minVal === maxVal) {
                rgb = ChannelDbPlugin.Palette.interpolate(0, minColor, 1, maxColorMiddle, 0.5);
            }
            return "rgb(" + String(Math.floor(rgb.r)) + "," + String(Math.floor(rgb.g)) + "," + String(Math.floor(rgb.b)) + ")";
        };
        return Vizualizer;
    }());
    LayersVizualizer.Vizualizer = Vizualizer;
    ;
})(LayersVizualizer || (LayersVizualizer = {}));
var LayersVizualizer;
(function (LayersVizualizer) {
    var Component;
    (function (Component) {
        var Positionable = (function () {
            function Positionable() {
            }
            Positionable.prototype.toBounds = function (width, height) {
                var xUnit = width / 100;
                var yUnit = height / 100;
                var x = 0;
                var y = 0;
                var w = 100;
                var h = 100;
                var ml = 0;
                var mr = 0;
                var mt = 0;
                var mb = 0;
                if (this.right === void 0 && this.left === void 0) {
                    this.left = 0;
                }
                if (this.bottom === void 0 && this.top === void 0) {
                    this.top = 0;
                }
                if (this.marginLeft !== void 0) {
                    ml = this.marginLeft;
                }
                if (this.marginRight !== void 0) {
                    mr = this.marginRight;
                }
                if (this.marginTop !== void 0) {
                    mt = this.marginTop;
                }
                if (this.marginBottom !== void 0) {
                    mb = this.marginBottom;
                }
                if (this.width !== void 0) {
                    w = this.width;
                    if (this.left !== void 0) {
                        x = this.left + ml;
                    }
                    else if (this.right !== void 0) {
                        x = 100 - (this.right + mr + w);
                    }
                }
                else {
                    if (this.left !== void 0) {
                        x = this.left + ml;
                        w -= x;
                    }
                    else if (this.right !== void 0) {
                        x = 0;
                        w -= this.right + mr;
                    }
                }
                if (this.height !== void 0) {
                    h = this.height;
                    if (this.top !== void 0) {
                        y = this.top + mt;
                    }
                    else if (this.bottom !== void 0) {
                        y = 100 - (this.bottom + mb + h);
                    }
                }
                else {
                    if (this.top !== void 0) {
                        y = this.top + mt;
                        h -= y;
                    }
                    else if (this.bottom !== void 0) {
                        y = 0;
                        h -= this.bottom + mb;
                    }
                }
                return {
                    x: x * xUnit,
                    y: y * yUnit,
                    width: w * xUnit,
                    height: h * yUnit
                };
            };
            return Positionable;
        }());
        Component.Positionable = Positionable;
        ;
        var Paintable = (function (_super) {
            __extends(Paintable, _super);
            function Paintable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Paintable;
        }(Positionable));
        Component.Paintable = Paintable;
        ;
        var Axis = (function (_super) {
            __extends(Axis, _super);
            function Axis() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            return Axis;
        }(Positionable));
        Component.Axis = Axis;
        ;
    })(Component = LayersVizualizer.Component || (LayersVizualizer.Component = {}));
})(LayersVizualizer || (LayersVizualizer = {}));
var LayersVizualizer;
(function (LayersVizualizer) {
    var Colors;
    (function (Colors) {
        function invertHexContrastGrayscale(hex) {
            return rgbToHex(invertRGBContrastGrayscale(hexToRGB(hex)));
        }
        Colors.invertHexContrastGrayscale = invertHexContrastGrayscale;
        function invertRGBContrastGrayscale(rgb) {
            var c = (rgb.r + rgb.g + rgb.b) / 3;
            var v = c > 0.5 * 255 ? c - 255 / 2 : c + 255 / 2;
            return { r: v, g: v, b: v };
        }
        Colors.invertRGBContrastGrayscale = invertRGBContrastGrayscale;
        function invertRGBColor(rgb) {
            return hexToRGB(invertHexColor(rgbToHex(rgb)));
        }
        Colors.invertRGBColor = invertRGBColor;
        function invertHexColor(hexTripletColor) {
            hexTripletColor = hexTripletColor.substring(1); // remove #
            var color = parseInt(hexTripletColor, 16); // convert to integer
            color = 0xFFFFFF ^ color; // invert three bytes
            var strColor = color.toString(16); // convert to hex
            strColor = ("000000" + strColor).slice(-6); // pad with leading zeros
            strColor = "#" + strColor; // prepend #
            return strColor;
        }
        Colors.invertHexColor = invertHexColor;
        function rgbComplement(rgb) {
            var temprgb = rgb;
            var temphsv = RGB2HSV(temprgb);
            temphsv.hue = HueShift(temphsv.hue, 180.0);
            temprgb = HSV2RGB(temphsv);
            return temprgb;
        }
        Colors.rgbComplement = rgbComplement;
        function hexToRGB(hex) {
            if (hex[0] !== "#") {
                throw new Error("Hex color has bad format!");
            }
            var rgbPart = hex.split("#")[1];
            if (rgbPart.length !== 6) {
                throw new Error("Hex color has bad format!");
            }
            var rHex = rgbPart.slice(0, 2);
            var gHex = rgbPart.slice(2, 4);
            var bHex = rgbPart.slice(4, 6);
            return {
                r: parseInt(rHex, 16),
                g: parseInt(gHex, 16),
                b: parseInt(bHex, 16)
            };
        }
        Colors.hexToRGB = hexToRGB;
        function Uint8ClampedArrayToRGB(rgbArr) {
            return {
                r: rgbArr[0],
                g: rgbArr[1],
                b: rgbArr[2]
            };
        }
        Colors.Uint8ClampedArrayToRGB = Uint8ClampedArrayToRGB;
        function parseRGBString(rgbString) {
            var rgbParts = [];
            for (var _i = 0, _a = ((rgbString.split('(')[1]).split(")")[0]).split(","); _i < _a.length; _i++) {
                var part = _a[_i];
                rgbParts.push(parseInt(part.replace(" ", "")));
            }
            return {
                r: rgbParts[0],
                g: rgbParts[1],
                b: rgbParts[2]
            };
        }
        Colors.parseRGBString = parseRGBString;
        function rgbToHex(rgb) {
            var rHex = Math.ceil(rgb.r).toString(16);
            var gHex = Math.ceil(rgb.g).toString(16);
            var bHex = Math.ceil(rgb.b).toString(16);
            return "#" + (((rHex.length == 1) ? "0" : "") + rHex) + (((gHex.length == 1) ? "0" : "") + gHex) + (((bHex.length == 1) ? "0" : "") + bHex);
        }
        Colors.rgbToHex = rgbToHex;
        function hexComplement(hex) {
            return rgbToHex(rgbComplement(hexToRGB(hex)));
        }
        Colors.hexComplement = hexComplement;
        ;
        function RGB2HSV(rgb) {
            var hsv = new Object();
            var max = max3(rgb.r, rgb.g, rgb.b);
            var dif = max - min3(rgb.r, rgb.g, rgb.b);
            hsv.saturation = (max == 0.0) ? 0 : (100 * dif / max);
            if (hsv.saturation == 0)
                hsv.hue = 0;
            else if (rgb.r == max)
                hsv.hue = 60.0 * (rgb.g - rgb.b) / dif;
            else if (rgb.g == max)
                hsv.hue = 120.0 + 60.0 * (rgb.b - rgb.r) / dif;
            else if (rgb.b == max)
                hsv.hue = 240.0 + 60.0 * (rgb.r - rgb.g) / dif;
            if (hsv.hue < 0.0)
                hsv.hue += 360.0;
            hsv.value = Math.round(max * 100 / 255);
            hsv.hue = Math.round(hsv.hue);
            hsv.saturation = Math.round(hsv.saturation);
            return hsv;
        }
        // RGB2HSV and HSV2RGB are based on Color Match Remix [http://color.twysted.net/]
        // which is based on or copied from ColorMatch 5K [http://colormatch.dk/]
        function HSV2RGB(hsv) {
            var rgb = new Object();
            if (hsv.saturation == 0) {
                rgb.r = rgb.g = rgb.b = Math.round(hsv.value * 2.55);
            }
            else {
                hsv.hue /= 60;
                hsv.saturation /= 100;
                hsv.value /= 100;
                var i = Math.floor(hsv.hue);
                var f = hsv.hue - i;
                var p = hsv.value * (1 - hsv.saturation);
                var q = hsv.value * (1 - hsv.saturation * f);
                var t = hsv.value * (1 - hsv.saturation * (1 - f));
                switch (i) {
                    case 0:
                        rgb.r = hsv.value;
                        rgb.g = t;
                        rgb.b = p;
                        break;
                    case 1:
                        rgb.r = q;
                        rgb.g = hsv.value;
                        rgb.b = p;
                        break;
                    case 2:
                        rgb.r = p;
                        rgb.g = hsv.value;
                        rgb.b = t;
                        break;
                    case 3:
                        rgb.r = p;
                        rgb.g = q;
                        rgb.b = hsv.value;
                        break;
                    case 4:
                        rgb.r = t;
                        rgb.g = p;
                        rgb.b = hsv.value;
                        break;
                    default:
                        rgb.r = hsv.value;
                        rgb.g = p;
                        rgb.b = q;
                }
                rgb.r = Math.round(rgb.r * 255);
                rgb.g = Math.round(rgb.g * 255);
                rgb.b = Math.round(rgb.b * 255);
            }
            return rgb;
        }
        //Adding HueShift via Jacob (see comments)
        function HueShift(h, s) {
            h += s;
            while (h >= 360.0)
                h -= 360.0;
            while (h < 0.0)
                h += 360.0;
            return h;
        }
        //min max via Hairgami_Master (see comments)
        function min3(a, b, c) {
            return (a < b) ? ((a < c) ? a : c) : ((b < c) ? b : c);
        }
        function max3(a, b, c) {
            return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
        }
    })(Colors = LayersVizualizer.Colors || (LayersVizualizer.Colors = {}));
})(LayersVizualizer || (LayersVizualizer = {}));
var Datagrid;
(function (Datagrid) {
    var Components;
    (function (Components) {
        var React = LiteMol.Plugin.React;
        var DGRowEmpty = (function (_super) {
            __extends(DGRowEmpty, _super);
            function DGRowEmpty() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGRowEmpty.prototype.render = function () {
                return (React.createElement("tr", null,
                    React.createElement("td", { colSpan: this.props.columnsCount })));
            };
            return DGRowEmpty;
        }(React.Component));
        Components.DGRowEmpty = DGRowEmpty;
        function getTitle(title, columnCount) {
            var tit = [];
            var sIdx = 0;
            if (title !== void 0) {
                tit = title;
                sIdx = title.length - 1;
            }
            for (; sIdx < columnCount; sIdx++) {
                tit.push("");
            }
            return tit;
        }
        var DGRow = (function (_super) {
            __extends(DGRow, _super);
            function DGRow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGRow.prototype.addTd = function (tds, i, columns, columnsCount, forceHtml) {
                var html = { __html: columns[i] };
                var tdClass = "";
                if (this.props.tdClass !== void 0) {
                    tdClass = this.props.tdClass;
                }
                var title = getTitle(this.props.title, columnsCount);
                if (forceHtml) {
                    tds.push(React.createElement("td", { title: title[i], className: "col col-" + (i + 1) + " " + tdClass, dangerouslySetInnerHTML: html }));
                }
                else {
                    tds.push(React.createElement("td", { title: title[i], className: "col col-" + (i + 1) }, columns[i]));
                }
            };
            DGRow.prototype.addTdWithColspan = function (tds, i, columns, columnsCount, forceHtml) {
                var html = { __html: columns[i] };
                var tdClass = "";
                if (this.props.tdClass !== void 0) {
                    tdClass = this.props.tdClass;
                }
                var title = getTitle(this.props.title, columnsCount);
                if (forceHtml) {
                    tds.push(React.createElement("td", { title: title[i], className: "col col-" + (i + 1) + " " + tdClass, colSpan: columnsCount - columns.length, dangerouslySetInnerHTML: html }));
                }
                else {
                    tds.push(React.createElement("td", { title: title[i], className: "col col-" + (i + 1) + " " + tdClass, colSpan: columnsCount - columns.length }, columns[i]));
                }
            };
            DGRow.prototype.generateRow = function (columns) {
                var columnsCount = columns.length;
                if (this.props.columnsCount !== void 0) {
                    columnsCount = this.props.columnsCount;
                }
                var forceHTML = false;
                if (this.props.forceHtml !== void 0) {
                    forceHTML = this.props.forceHtml;
                }
                var tds = [];
                for (var i = 0; i < columns.length; i++) {
                    if (i === columns.length - 1 && columns.length !== columnsCount) {
                        this.addTdWithColspan(tds, i, columns, columnsCount, forceHTML);
                        break;
                    }
                    this.addTd(tds, i, columns, columnsCount, forceHTML);
                }
                return tds;
            };
            DGRow.prototype.render = function () {
                var trClass = "";
                if (this.props.trClass !== void 0) {
                    trClass = this.props.trClass;
                }
                return (React.createElement("tr", { className: trClass }, this.generateRow(this.props.columns)));
            };
            return DGRow;
        }(React.Component));
        Components.DGRow = DGRow;
        var DGElementRow = (function (_super) {
            __extends(DGElementRow, _super);
            function DGElementRow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGElementRow.prototype.generateRow = function (columns) {
                var tdClass = "";
                if (this.props.tdClass !== void 0) {
                    tdClass = this.props.tdClass;
                }
                var columnsCount = columns.length;
                if (this.props.columnsCount !== void 0) {
                    columnsCount = this.props.columnsCount;
                }
                var title = getTitle(this.props.title, columnsCount);
                var tds = [];
                for (var i = 0; i < columns.length; i++) {
                    if (i === columns.length - 1 && columns.length !== columnsCount) {
                        tds.push(React.createElement("td", { title: title[i], className: "col col-" + (i + 1) + " " + tdClass, colSpan: columnsCount - columns.length }, columns[i]));
                        break;
                    }
                    tds.push(React.createElement("td", { title: title[i], className: "col col-" + (i + 1) + " " + tdClass }, columns[i]));
                }
                return tds;
            };
            DGElementRow.prototype.render = function () {
                var trClass = "";
                if (this.props.trClass !== void 0) {
                    trClass = this.props.trClass;
                }
                return (React.createElement("tr", { className: trClass }, this.generateRow(this.props.columns)));
            };
            return DGElementRow;
        }(React.Component));
        Components.DGElementRow = DGElementRow;
        var DGTdWithHtml = (function (_super) {
            __extends(DGTdWithHtml, _super);
            function DGTdWithHtml() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGTdWithHtml.prototype.render = function () {
                return (React.createElement("td", { className: "col col-" + this.props.colIdx, dangerouslySetInnerHTML: { __html: this.props.contents } }));
            };
            return DGTdWithHtml;
        }(React.Component));
        Components.DGTdWithHtml = DGTdWithHtml;
        var DGNoDataInfoRow = (function (_super) {
            __extends(DGNoDataInfoRow, _super);
            function DGNoDataInfoRow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGNoDataInfoRow.prototype.render = function () {
                var infoText = "There are no data to be displayed...";
                if (this.props.infoText !== void 0) {
                    infoText = this.props.infoText;
                }
                return (React.createElement("tr", null,
                    React.createElement("td", { colSpan: this.props.columnsCount }, infoText)));
            };
            return DGNoDataInfoRow;
        }(React.Component));
        Components.DGNoDataInfoRow = DGNoDataInfoRow;
    })(Components = Datagrid.Components || (Datagrid.Components = {}));
})(Datagrid || (Datagrid = {}));
var AglomeredParameters;
(function (AglomeredParameters) {
    var UI;
    (function (UI) {
        var React = LiteMol.Plugin.React;
        var LiteMoleEvent = LiteMol.Bootstrap.Event;
        var DGComponents = Datagrid.Components;
        var Tooltips = CommonUtils.Tooltips;
        var DGTABLE_COLS_COUNT = 7;
        ;
        function render(target, plugin) {
            LiteMol.Plugin.ReactDOM.render(React.createElement(App, { controller: plugin }), target);
        }
        UI.render = render;
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.interactionEventStream = void 0;
                _this.state = {
                    data: null,
                    app: _this,
                    isWaitingForData: false
                };
                return _this;
            }
            App.prototype.componentDidMount = function () {
                var _this = this;
                LiteMoleEvent.Tree.NodeAdded.getStream(this.props.controller.context).subscribe(function (e) {
                    if (e.data.tree !== void 0 && e.data.ref === "mole-data") {
                        var toShow = [];
                        var data = e.data.props.data;
                        toShow = toShow.concat(data.Channels.CofactorTunnels);
                        toShow = toShow.concat(data.Channels.ReviewedChannels);
                        toShow = toShow.concat(data.Channels.CSATunnels);
                        toShow = toShow.concat(data.Channels.TransmembranePores);
                        var state = _this.state;
                        state.data = toShow;
                        _this.setState(state);
                    }
                });
            };
            App.prototype.dataWaitHandler = function () {
                var state = this.state;
                state.isWaitingForData = false;
                this.setState(state);
            };
            App.prototype.invokeDataWait = function () {
                if (this.state.isWaitingForData) {
                    return;
                }
                var state = this.state;
                state.isWaitingForData = true;
                this.setState(state);
                Annotation.AnnotationDataProvider.subscribeForData(this.dataWaitHandler.bind(this));
            };
            App.prototype.componentWillUnmount = function () {
            };
            App.prototype.render = function () {
                if (this.state.data !== null) {
                    $('.init-agp-tooltip').tooltip({ container: 'body' });
                    return (React.createElement("div", null,
                        React.createElement(DGTable, __assign({}, this.state))));
                }
                return React.createElement("div", null);
            };
            return App;
        }(React.Component));
        UI.App = App;
        var DGTable = (function (_super) {
            __extends(DGTable, _super);
            function DGTable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGTable.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-aglomered-parameters" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement(DGBody, __assign({}, this.props)))));
            };
            return DGTable;
        }(React.Component));
        var DGHead = (function (_super) {
            __extends(DGHead, _super);
            function DGHead() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGHead.prototype.render = function () {
                return (React.createElement("table", null,
                    React.createElement("tr", null,
                        React.createElement("th", { title: "Name", className: "col col-1 ATable-header-identifier init-agp-tooltip", "data-toggle": "tooltip", "data-placement": "bottom" }, "Name"),
                        React.createElement("th", { title: Tooltips.getMessageOrLeaveText("tooltip-Length"), className: "col col-2 ATable-header-length init-agp-tooltip", "data-toggle": "tooltip", "data-placement": "bottom" },
                            React.createElement("span", { className: "glyphicon glyphicon-resize-horizontal" }),
                            " ",
                            React.createElement("span", { className: "ATable-label" }, "Length")),
                        React.createElement("th", { title: Tooltips.getMessageOrLeaveText("tooltip-Bottleneck"), className: "col col-3 ATable-header-bottleneck init-agp-tooltip", "data-toggle": "tooltip", "data-placement": "bottom" },
                            React.createElement("span", { className: "icon bottleneck" }),
                            " ",
                            React.createElement("span", { className: "ATable-label" }, "Bottleneck")),
                        React.createElement("th", { title: Tooltips.getMessageOrLeaveText("tooltip-agl-Hydropathy"), className: "col col-4 ATable-header-hydropathy init-agp-tooltip", "data-toggle": "tooltip", "data-placement": "bottom" },
                            React.createElement("span", { className: "glyphicon glyphicon-tint" }),
                            " ",
                            React.createElement("span", { className: "ATable-label" }, "Hydropathy")),
                        React.createElement("th", { title: "Charge", className: "col col-5 ATable-header-charge init-agp-tooltip", "data-toggle": "tooltip", "data-placement": "bottom" },
                            React.createElement("span", { className: "glyphicon glyphicon-flash" }),
                            " ",
                            React.createElement("span", { className: "ATable-label" }, "Charge")),
                        React.createElement("th", { title: Tooltips.getMessageOrLeaveText("tooltip-agl-Polarity"), className: "col col-6 ATable-header-polarity init-agp-tooltip", "data-toggle": "tooltip", "data-placement": "bottom" },
                            React.createElement("span", { className: "glyphicon glyphicon-plus" }),
                            " ",
                            React.createElement("span", { className: "ATable-label" }, "Polarity")),
                        React.createElement("th", { title: Tooltips.getMessageOrLeaveText("tooltip-agl-Mutability"), className: "col col-7 ATable-header-mutability init-agp-tooltip", "data-toggle": "tooltip", "data-placement": "bottom" },
                            React.createElement("span", { className: "glyphicon glyphicon-scissors" }),
                            " ",
                            React.createElement("span", { className: "ATable-label" }, "Mutability")))));
            };
            ;
            return DGHead;
        }(React.Component));
        var DGBody = (function (_super) {
            __extends(DGBody, _super);
            function DGBody() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGBody.prototype.generateMockData = function () {
                if (this.props.data === null) {
                    return React.createElement("tr", null,
                        React.createElement("td", { colSpan: DGTABLE_COLS_COUNT }, "There are no data to be displayed..."));
                }
                var rows = [];
                for (var _i = 0, _a = this.props.data; _i < _a.length; _i++) {
                    var tunnel = _a[_i];
                    rows.push(React.createElement(DGRow, { tunnel: tunnel, app: this.props.app }));
                }
                if (rows.length === 0) {
                    return rows;
                }
                for (var i = rows.length; i < 100; i++) {
                    rows.push(rows[0]);
                }
                rows.push(React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT }));
                return rows;
            };
            DGBody.prototype.generateRows = function () {
                if (this.props.data === null) {
                    return React.createElement("tr", null,
                        React.createElement("td", { colSpan: DGTABLE_COLS_COUNT }, "There are no data to be displayed..."));
                }
                var rows = [];
                for (var _i = 0, _a = this.props.data; _i < _a.length; _i++) {
                    var tunnel = _a[_i];
                    rows.push(React.createElement(DGRow, { tunnel: tunnel, app: this.props.app }));
                }
                rows.push(React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT }));
                return rows;
            };
            DGBody.prototype.render = function () {
                var rows = this.generateRows();
                return (React.createElement("table", null, rows));
            };
            ;
            return DGBody;
        }(React.Component));
        var DGRow = (function (_super) {
            __extends(DGRow, _super);
            function DGRow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGRow.prototype.render = function () {
                var tunnelID = this.props.tunnel.Type;
                var annotation = Annotation.AnnotationDataProvider.getChannelAnnotation(this.props.tunnel.Id);
                if (annotation !== void 0 && annotation !== null) {
                    tunnelID = annotation.text;
                }
                if (annotation === void 0) {
                    this.props.app.invokeDataWait();
                }
                return (React.createElement("tr", null,
                    React.createElement("td", { className: "col col-1" }, tunnelID),
                    React.createElement("td", { className: "col col-2" },
                        CommonUtils.Tunnels.getLength(this.props.tunnel),
                        " \u00C5"),
                    React.createElement("td", { className: "col col-3" },
                        CommonUtils.Tunnels.getBottleneck(this.props.tunnel),
                        " \u00C5"),
                    React.createElement("td", { className: "col col-4" }, CommonUtils.Numbers.roundToDecimal(this.props.tunnel.Properties.Hydropathy, 2)),
                    React.createElement("td", { className: "col col-5" }, CommonUtils.Numbers.roundToDecimal(this.props.tunnel.Properties.Charge, 2)),
                    React.createElement("td", { className: "col col-6" }, CommonUtils.Numbers.roundToDecimal(this.props.tunnel.Properties.Polarity, 2)),
                    React.createElement("td", { className: "col col-7" }, CommonUtils.Numbers.roundToDecimal(this.props.tunnel.Properties.Mutability, 2))));
            };
            return DGRow;
        }(React.Component));
    })(UI = AglomeredParameters.UI || (AglomeredParameters.UI = {}));
})(AglomeredParameters || (AglomeredParameters = {}));
var ChannelsDescriptions;
(function (ChannelsDescriptions) {
    var UI;
    (function (UI) {
        var React = LiteMol.Plugin.React;
        var LiteMoleEvent = LiteMol.Bootstrap.Event;
        var DGComponents = Datagrid.Components;
        var DGTABLE_COLS_COUNT = 2;
        ;
        function render(target, plugin) {
            LiteMol.Plugin.ReactDOM.render(React.createElement(App, { controller: plugin }), target);
        }
        UI.render = render;
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.interactionEventStream = void 0;
                _this.state = {
                    data: null,
                    app: _this,
                    isWaitingForData: false
                };
                return _this;
            }
            App.prototype.componentDidMount = function () {
                var _this = this;
                LiteMoleEvent.Tree.NodeAdded.getStream(this.props.controller.context).subscribe(function (e) {
                    if (e.data.tree !== void 0 && e.data.ref === "mole-data") {
                        var toShow = [];
                        var data = e.data.props.data;
                        toShow = toShow.concat(data.Channels.CofactorTunnels);
                        toShow = toShow.concat(data.Channels.ReviewedChannels);
                        toShow = toShow.concat(data.Channels.CSATunnels);
                        toShow = toShow.concat(data.Channels.TransmembranePores);
                        var state = _this.state;
                        state.data = toShow;
                        _this.setState(state);
                    }
                });
            };
            App.prototype.dataWaitHandler = function () {
                var state = this.state;
                state.isWaitingForData = false;
                this.setState(state);
            };
            App.prototype.invokeDataWait = function () {
                if (this.state.isWaitingForData) {
                    return;
                }
                var state = this.state;
                state.isWaitingForData = true;
                this.setState(state);
                Annotation.AnnotationDataProvider.subscribeForData(this.dataWaitHandler.bind(this));
            };
            App.prototype.componentWillUnmount = function () {
            };
            App.prototype.render = function () {
                if (this.state.data !== null) {
                    return (React.createElement("div", null,
                        React.createElement(DGTable, __assign({}, this.state))));
                }
                return React.createElement("div", null);
            };
            return App;
        }(React.Component));
        UI.App = App;
        var DGTable = (function (_super) {
            __extends(DGTable, _super);
            function DGTable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGTable.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-channels-descriptions" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement(DGBody, __assign({}, this.props)))));
            };
            return DGTable;
        }(React.Component));
        var DGHead = (function (_super) {
            __extends(DGHead, _super);
            function DGHead() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGHead.prototype.render = function () {
                return (React.createElement("table", null,
                    React.createElement("tr", null,
                        React.createElement("th", { title: "Name", className: "col col-1" }, "Name"),
                        React.createElement("th", { title: "Description", className: "col col-2" }, "Description"))));
            };
            ;
            return DGHead;
        }(React.Component));
        var DGBody = (function (_super) {
            __extends(DGBody, _super);
            function DGBody() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGBody.prototype.generateRows = function () {
                if (this.props.data === null) {
                    return [
                        React.createElement("tr", null,
                            React.createElement("td", { colSpan: DGTABLE_COLS_COUNT }, "There are no data to be displayed...")),
                        React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT })
                    ];
                }
                var rows = [];
                for (var _i = 0, _a = this.props.data; _i < _a.length; _i++) {
                    var tunnel = _a[_i];
                    var mainAnnotation = Annotation.AnnotationDataProvider.getChannelAnnotation(tunnel.Id);
                    var annotations = Annotation.AnnotationDataProvider.getChannelAnnotations(tunnel.Id);
                    if (annotations === void 0 || mainAnnotation === void 0) {
                        this.props.app.invokeDataWait();
                    }
                    if (annotations !== void 0 && annotations !== null && mainAnnotation !== void 0 && mainAnnotation !== null) {
                        for (var _b = 0, annotations_1 = annotations; _b < annotations_1.length; _b++) {
                            var annotation = annotations_1[_b];
                            var name_3 = mainAnnotation.text + " / " + annotation.text;
                            if (mainAnnotation.text === annotation.text) {
                                name_3 = mainAnnotation.text;
                            }
                            var description = annotation.description;
                            if (description === "") {
                                continue;
                            }
                            rows.push(React.createElement(DGRow, { tunnelName: name_3, description: description, channelId: tunnel.Id, app: this.props.app }));
                        }
                    }
                }
                if (rows.length === 0) {
                    return [
                        React.createElement("tr", null,
                            React.createElement("td", { colSpan: DGTABLE_COLS_COUNT }, "There are no data to be displayed...")),
                        React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT })
                    ];
                }
                rows.push(React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT }));
                return rows;
            };
            DGBody.prototype.render = function () {
                var rows = this.generateRows();
                return (React.createElement("table", null, rows));
            };
            ;
            return DGBody;
        }(React.Component));
        var DGRow = (function (_super) {
            __extends(DGRow, _super);
            function DGRow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGRow.prototype.selectChannel = function (channelId) {
                Bridge.Events.invokeChannelSelect(channelId);
            };
            DGRow.prototype.render = function () {
                var _this = this;
                var name = this.props.tunnelName;
                var description = this.props.description;
                return (React.createElement("tr", null,
                    React.createElement("td", { className: "col col-1" },
                        React.createElement("a", { className: "hand", onClick: function () { return _this.selectChannel(_this.props.channelId); } }, name)),
                    React.createElement("td", { className: "col col-2" }, description)));
            };
            return DGRow;
        }(React.Component));
    })(UI = ChannelsDescriptions.UI || (ChannelsDescriptions.UI = {}));
})(ChannelsDescriptions || (ChannelsDescriptions = {}));
var LayerProperties;
(function (LayerProperties) {
    var UI;
    (function (UI) {
        var React = LiteMol.Plugin.React;
        var DGComponents = Datagrid.Components;
        var DGTABLE_COLS_COUNT = 2;
        var NO_DATA_MESSAGE = "Hover over channel(2D) for details...";
        ;
        ;
        function render(target, plugin) {
            LiteMol.Plugin.ReactDOM.render(React.createElement(App, { controller: plugin }), target);
        }
        UI.render = render;
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.interactionEventStream = void 0;
                _this.state = {
                    data: null,
                    app: _this,
                    layerIdx: -1
                };
                _this.layerIdx = -1;
                return _this;
            }
            App.prototype.componentDidMount = function () {
                $(window).on('layerTriggered', this.layerTriggerHandler.bind(this));
            };
            App.prototype.layerTriggerHandler = function (event, layerIdx) {
                this.layerIdx = layerIdx;
                var data = CommonUtils.Selection.SelectionHelper.getSelectedChannelData();
                var state = this.state;
                if (data !== null) {
                    state.layerIdx = layerIdx;
                    state.data = data.LayersInfo;
                    this.setState(state);
                }
                else {
                    state.layerIdx = layerIdx;
                    this.setState(state);
                }
                setTimeout(function () {
                    $(window).trigger('contentResize');
                }, 1);
            };
            App.prototype.componentWillUnmount = function () {
            };
            App.prototype.render = function () {
                if (this.state.data !== null && this.state.layerIdx >= 0) {
                    return (React.createElement("div", null,
                        React.createElement(DGTable, __assign({}, this.state))));
                }
                return React.createElement("div", null,
                    React.createElement(DGNoData, __assign({}, this.state)));
            };
            return App;
        }(React.Component));
        UI.App = App;
        var DGNoData = (function (_super) {
            __extends(DGNoData, _super);
            function DGNoData() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGNoData.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-layer-properties" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement("table", null,
                            React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT, infoText: NO_DATA_MESSAGE }),
                            React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT })))));
            };
            return DGNoData;
        }(React.Component));
        var DGTable = (function (_super) {
            __extends(DGTable, _super);
            function DGTable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGTable.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-layer-properties" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement(DGBody, __assign({}, this.props)))));
            };
            return DGTable;
        }(React.Component));
        var DGHead = (function (_super) {
            __extends(DGHead, _super);
            function DGHead() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGHead.prototype.render = function () {
                return (React.createElement("table", null,
                    React.createElement("tr", null,
                        React.createElement("th", { title: "Property", className: "col col-1" }, "Property"),
                        React.createElement("th", { title: "Value", className: "col col-2" }, "Value"))));
            };
            ;
            return DGHead;
        }(React.Component));
        var DGBody = (function (_super) {
            __extends(DGBody, _super);
            function DGBody() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGBody.prototype.generateRows = function () {
                if (this.props.data === null) {
                    return React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT, infoText: NO_DATA_MESSAGE });
                }
                var layerData = this.props.data[this.props.layerIdx].Properties;
                var rows = [];
                var charge = CommonUtils.Numbers.roundToDecimal(layerData.Charge, 2).toString() + " (+" + CommonUtils.Numbers.roundToDecimal(layerData.NumPositives, 2).toString() + "/-" + CommonUtils.Numbers.roundToDecimal(layerData.NumNegatives, 2).toString() + ")";
                var minRadius = this.props.data[this.props.layerIdx].LayerGeometry.MinRadius;
                rows.push(React.createElement(DGComponents.DGElementRow, { columns: [React.createElement("span", null,
                            React.createElement("span", { className: "glyphicon glyphicon-tint properties-icon" }),
                            "Hydropathy"), React.createElement("span", null, CommonUtils.Numbers.roundToDecimal(layerData.Hydropathy, 2).toString())] }));
                rows.push(React.createElement(DGComponents.DGElementRow, { columns: [React.createElement("span", null,
                            React.createElement("span", { className: "glyphicon glyphicon-plus properties-icon" }),
                            "Polarity"), React.createElement("span", null, CommonUtils.Numbers.roundToDecimal(layerData.Polarity, 2).toString())] }));
                rows.push(React.createElement(DGComponents.DGElementRow, { columns: [React.createElement("span", null,
                            React.createElement("span", { className: "glyphicon glyphicon-tint properties-icon upside-down" }),
                            "Hydrophobicity"), React.createElement("span", null, CommonUtils.Numbers.roundToDecimal(layerData.Hydrophobicity, 2).toString())] }));
                rows.push(React.createElement(DGComponents.DGElementRow, { columns: [React.createElement("span", null,
                            React.createElement("span", { className: "glyphicon glyphicon-scissors properties-icon" }),
                            "Mutability"), React.createElement("span", null, CommonUtils.Numbers.roundToDecimal(layerData.Mutability, 2).toString())] }));
                rows.push(React.createElement(DGComponents.DGElementRow, { columns: [React.createElement("span", null,
                            React.createElement("span", { className: "glyphicon glyphicon-flash properties-icon" }),
                            "Charge"), React.createElement("span", null, charge)] }));
                rows.push(React.createElement(DGComponents.DGElementRow, { columns: [React.createElement("span", null,
                            React.createElement("span", { className: "icon bottleneck black properties-icon" }),
                            "Radius"), React.createElement("span", null, CommonUtils.Numbers.roundToDecimal(minRadius, 1))] }));
                rows.push(React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT }));
                return rows;
            };
            DGBody.prototype.render = function () {
                var rows = this.generateRows();
                return (React.createElement("table", null, rows));
            };
            ;
            return DGBody;
        }(React.Component));
        var DGRow = (function (_super) {
            __extends(DGRow, _super);
            function DGRow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGRow.prototype.generateRow = function (columns) {
                var tds = [];
                for (var i = 0; i < columns.length; i++) {
                    tds.push(React.createElement("td", { className: "col col-" + (i + 1) }, columns[i]));
                }
                return tds;
            };
            DGRow.prototype.render = function () {
                return (React.createElement("tr", null, this.generateRow(this.props.columns)));
            };
            return DGRow;
        }(React.Component));
    })(UI = LayerProperties.UI || (LayerProperties.UI = {}));
})(LayerProperties || (LayerProperties = {}));
var LayerResidues;
(function (LayerResidues) {
    var UI;
    (function (UI) {
        var DGComponents = Datagrid.Components;
        var React = LiteMol.Plugin.React;
        var DGTABLE_COLS_COUNT = 2;
        var NO_DATA_MESSAGE = "Hover over channel(2D) for details...";
        ;
        ;
        function render(target, plugin) {
            LiteMol.Plugin.ReactDOM.render(React.createElement(App, { controller: plugin }), target);
        }
        UI.render = render;
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.interactionEventStream = void 0;
                _this.state = {
                    data: null,
                    app: _this,
                    layerIdx: -1,
                    isWaitingForData: false
                };
                _this.layerIdx = -1;
                return _this;
            }
            App.prototype.componentDidMount = function () {
                $(window).on('layerTriggered', this.layerTriggerHandler.bind(this));
            };
            App.prototype.dataWaitHandler = function () {
                var state = this.state;
                state.isWaitingForData = false;
                this.setState(state);
            };
            App.prototype.invokeDataWait = function () {
                if (this.state.isWaitingForData) {
                    return;
                }
                var state = this.state;
                state.isWaitingForData = true;
                this.setState(state);
                Annotation.AnnotationDataProvider.subscribeForData(this.dataWaitHandler.bind(this));
            };
            App.prototype.layerTriggerHandler = function (event, layerIdx) {
                this.layerIdx = layerIdx;
                var data = CommonUtils.Selection.SelectionHelper.getSelectedChannelData();
                var state = this.state;
                if (data !== null) {
                    state.layerIdx = layerIdx;
                    state.data = data.LayersInfo;
                    this.setState(state);
                }
                else {
                    state.layerIdx = layerIdx;
                    this.setState(state);
                }
                setTimeout(function () {
                    $(window).trigger('contentResize');
                }, 1);
            };
            App.prototype.componentWillUnmount = function () {
            };
            App.prototype.render = function () {
                if (this.state.data !== null && this.state.layerIdx >= 0) {
                    return (React.createElement("div", null,
                        React.createElement(DGTable, __assign({}, this.state))));
                }
                return React.createElement("div", null,
                    React.createElement(DGNoData, __assign({}, this.state)));
            };
            return App;
        }(React.Component));
        UI.App = App;
        var DGNoData = (function (_super) {
            __extends(DGNoData, _super);
            function DGNoData() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGNoData.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-layer-residues" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement("table", null,
                            React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT, infoText: NO_DATA_MESSAGE }),
                            React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT })))));
            };
            return DGNoData;
        }(React.Component));
        var DGTable = (function (_super) {
            __extends(DGTable, _super);
            function DGTable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGTable.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-layer-residues" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement(DGBody, __assign({}, this.props)))));
            };
            return DGTable;
        }(React.Component));
        var DGHead = (function (_super) {
            __extends(DGHead, _super);
            function DGHead() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGHead.prototype.render = function () {
                return (React.createElement("table", null,
                    React.createElement("tr", null,
                        React.createElement("th", { title: "Residue", className: "col col-1" }, "Residue"),
                        React.createElement("th", { title: "Annotation", className: "col col-2" }, "Annotation"))));
            };
            ;
            return DGHead;
        }(React.Component));
        var DGBody = (function (_super) {
            __extends(DGBody, _super);
            function DGBody() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGBody.prototype.generateLink = function (annotation) {
                if (annotation.reference === "") {
                    return (annotation.text !== void 0 && annotation.text !== null) ? React.createElement("span", null, annotation.text) : React.createElement("span", { className: "no-annotation" });
                }
                return React.createElement("a", { target: "_blank", href: annotation.link, dangerouslySetInnerHTML: { __html: annotation.text } });
            };
            DGBody.prototype.shortenBackbone = function (residue) {
                return residue.replace(/Backbone/g, '');
            };
            DGBody.prototype.isBackbone = function (residue) {
                return residue.indexOf("Backbone") >= 0;
            };
            DGBody.prototype.generateSpannedRows = function (residue, annotations) {
                var trs = [];
                var residueNameEl = (this.isBackbone(residue)) ? React.createElement("i", null,
                    React.createElement("strong", null, this.shortenBackbone(residue))) : React.createElement("span", null, residue);
                var first = true;
                for (var _i = 0, annotations_2 = annotations; _i < annotations_2.length; _i++) {
                    var annotation = annotations_2[_i];
                    if (first === true) {
                        first = false;
                        trs.push(React.createElement("tr", null,
                            React.createElement("td", { title: (this.isBackbone(residue) ? residue : ""), className: "col col-1 " + (this.isBackbone(residue) ? "help" : ""), rowSpan: (annotations.length > 1) ? annotations.length : void 0 }, residueNameEl),
                            React.createElement("td", { className: "col col-2" }, this.generateLink(annotation))));
                    }
                    else {
                        trs.push(React.createElement("tr", null,
                            React.createElement("td", { className: "col col-2" }, this.generateLink(annotation))));
                    }
                }
                return trs;
            };
            DGBody.prototype.generateRows = function () {
                if (this.props.data === null) {
                    return React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT, infoText: NO_DATA_MESSAGE });
                }
                var layerData = this.props.data[this.props.layerIdx].Residues;
                var rows = [];
                for (var _i = 0, layerData_1 = layerData; _i < layerData_1.length; _i++) {
                    var residue = layerData_1[_i];
                    var residueId = residue.split(" ").slice(1, 3).join(" ");
                    var annotation = void 0;
                    var annotationText = "";
                    var annotationSource = "";
                    annotation = Annotation.AnnotationDataProvider.getResidueAnnotations(residueId);
                    var residueNameEl = (this.isBackbone(residue)) ? React.createElement("i", null,
                        React.createElement("strong", null, this.shortenBackbone(residue))) : React.createElement("span", null, residue);
                    if (annotation === void 0) {
                        this.props.app.invokeDataWait();
                        rows.push(React.createElement(DGComponents.DGElementRow, { columns: [residueNameEl, React.createElement("span", null, "Annotation data still loading...")], title: [(this.isBackbone(residue) ? residue : ""), (this.isBackbone(residue) ? residue : "")], trClass: (this.isBackbone(residue) ? "help" : "") }));
                    }
                    else if (annotation !== null && annotation.length > 0) {
                        rows = rows.concat(this.generateSpannedRows(residue, annotation));
                    }
                    else {
                        rows.push(React.createElement(DGComponents.DGElementRow, { columns: [residueNameEl, React.createElement("span", null)], title: [(this.isBackbone(residue) ? residue : ""), (this.isBackbone(residue) ? residue : "")], trClass: (this.isBackbone(residue) ? "help" : "") }));
                    }
                }
                rows.push(React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT }));
                return rows;
            };
            DGBody.prototype.render = function () {
                var rows = this.generateRows();
                return (React.createElement("table", null, rows));
            };
            ;
            return DGBody;
        }(React.Component));
    })(UI = LayerResidues.UI || (LayerResidues.UI = {}));
})(LayerResidues || (LayerResidues = {}));
var ResidueAnnotations;
(function (ResidueAnnotations) {
    var UI;
    (function (UI) {
        var React = LiteMol.Plugin.React;
        var DGComponents = Datagrid.Components;
        var DGTABLE_COLS_COUNT = 2;
        ;
        ;
        function render(target, plugin) {
            LiteMol.Plugin.ReactDOM.render(React.createElement(App, { controller: plugin }), target);
        }
        UI.render = render;
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    data: null,
                    app: _this,
                    isWaitingForData: false
                };
                _this.layerIdx = -1;
                return _this;
            }
            App.prototype.sortResidues = function (residues, useAnnotations) {
                if (useAnnotations === void 0) {
                    useAnnotations = false;
                }
                if (useAnnotations && (this.state.isWaitingForData || Annotation.AnnotationDataProvider.getResidueAnnotations(residues[0]) === void 0)) {
                    useAnnotations = false;
                }
                if (residues.length === 0) {
                    return residues;
                }
                ;
                var groupFn = function (resParsed) {
                    var lining = [];
                    var other = [];
                    if (useAnnotations) {
                        for (var _i = 0, resParsed_1 = resParsed; _i < resParsed_1.length; _i++) {
                            var r = resParsed_1[_i];
                            var annotation = Annotation.AnnotationDataProvider.getResidueAnnotations(r.authSeqNumber + " " + r.chain.authAsymId);
                            //annotation data not ready
                            if (annotation === void 0) {
                                other = resParsed;
                                lining = [];
                                break;
                            }
                            //annotation data available
                            if (annotation.length !== 0) {
                                var isLining = false;
                                for (var _a = 0, annotation_1 = annotation; _a < annotation_1.length; _a++) {
                                    var a = annotation_1[_a];
                                    if (a.isLining === true) {
                                        lining.push(r);
                                        isLining = true;
                                        break;
                                    }
                                }
                                if (!isLining) {
                                    other.push(r);
                                }
                            }
                            else {
                                other.push(r);
                            }
                        }
                    }
                    else {
                        other = resParsed;
                    }
                    return [lining, other];
                };
                return CommonUtils.Residues.sort(residues, groupFn);
            };
            App.prototype.componentDidMount = function () {
                var _this = this;
                var list = Annotation.AnnotationDataProvider.getResidueList();
                if (list !== void 0) {
                    var state = this.state;
                    state.data = this.sortResidues(list);
                    this.setState(state);
                }
                else {
                    Annotation.AnnotationDataProvider.subscribeForData((function () {
                        var list = Annotation.AnnotationDataProvider.getResidueList();
                        if (list === void 0) {
                            return;
                        }
                        var s = _this.state;
                        s.data = _this.sortResidues(list, true);
                        _this.setState(s);
                        setTimeout(function () {
                            $(window).trigger('contentResize');
                        }, 1);
                    }).bind(this));
                }
            };
            App.prototype.dataWaitHandler = function () {
                var state = this.state;
                state.isWaitingForData = false;
                this.setState(state);
            };
            App.prototype.invokeDataWait = function () {
                if (this.state.isWaitingForData) {
                    return;
                }
                var state = this.state;
                state.isWaitingForData = true;
                this.setState(state);
                Annotation.AnnotationDataProvider.subscribeForData(this.dataWaitHandler.bind(this));
            };
            App.prototype.selectResiude = function (residueId) {
                var residueParts = residueId.split(" ").slice(0, 2);
                var residue = { chain: { authAsymId: residueParts[1] }, authSeqNumber: Number(residueParts[0]) };
                if (!CommonUtils.Selection.SelectionHelper.isSelectedLight(residue)) {
                    CommonUtils.Selection.SelectionHelper.selectResidueByAuthAsymIdAndAuthSeqNumberWithBallsAndSticks(this.props.controller, residue);
                }
            };
            App.prototype.componentWillUnmount = function () {
            };
            App.prototype.render = function () {
                if (this.state.data !== null) {
                    return (React.createElement("div", null,
                        React.createElement(DGTable, __assign({}, this.state))));
                }
                return React.createElement("div", null,
                    React.createElement(DGNoData, __assign({}, this.state)));
            };
            return App;
        }(React.Component));
        UI.App = App;
        var DGNoData = (function (_super) {
            __extends(DGNoData, _super);
            function DGNoData() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGNoData.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-residue-annotations" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement("table", null,
                            React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT }),
                            React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT })))));
            };
            return DGNoData;
        }(React.Component));
        var DGTable = (function (_super) {
            __extends(DGTable, _super);
            function DGTable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGTable.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-residue-annotations" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement(DGBody, __assign({}, this.props)))));
            };
            return DGTable;
        }(React.Component));
        var DGHead = (function (_super) {
            __extends(DGHead, _super);
            function DGHead() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGHead.prototype.render = function () {
                return (React.createElement("table", null,
                    React.createElement("tr", null,
                        React.createElement("th", { title: "Residue", className: "col col-1" }, "Residue"),
                        React.createElement("th", { title: "Annotation", className: "col col-2" }, "Annotation"))));
            };
            ;
            return DGHead;
        }(React.Component));
        var DGBody = (function (_super) {
            __extends(DGBody, _super);
            function DGBody() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGBody.prototype.generateLink = function (annotation) {
                if (annotation.reference === "") {
                    return (annotation.text !== void 0 && annotation.text !== null) ? React.createElement("span", null, annotation.text) : React.createElement("span", { className: "no-annotation" });
                }
                return React.createElement("a", { target: "_blank", href: annotation.link, dangerouslySetInnerHTML: { __html: annotation.text } });
            };
            DGBody.prototype.generateSpannedRows = function (residue, annotations) {
                var _this = this;
                var trs = [];
                var first = true;
                for (var _i = 0, annotations_3 = annotations; _i < annotations_3.length; _i++) {
                    var annotation = annotations_3[_i];
                    if (first === true) {
                        first = false;
                        trs.push(React.createElement("tr", { className: (annotation.isLining) ? "highlight" : "" },
                            React.createElement("td", { rowSpan: (annotations.length > 1) ? annotations.length : void 0, className: "col col-1" },
                                React.createElement("a", { className: "hand", onClick: function () { _this.props.app.selectResiude(residue); } }, residue)),
                            React.createElement("td", { className: "col col-2" }, this.generateLink(annotation))));
                    }
                    else {
                        trs.push(React.createElement("tr", { className: (annotation.isLining) ? "highlight" : "" },
                            React.createElement("td", { className: "col col-2" }, this.generateLink(annotation))));
                    }
                }
                return trs;
            };
            DGBody.prototype.generateRows = function () {
                var _this = this;
                if (this.props.data === null) {
                    return React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT });
                }
                var residues = this.props.data;
                var rows = [];
                var _loop_1 = function (residueId) {
                    var annotation = void 0;
                    var annotationText = "";
                    var annotationSource = "";
                    annotation = Annotation.AnnotationDataProvider.getResidueAnnotations(residueId);
                    if (annotation === void 0) {
                        this_1.props.app.invokeDataWait();
                        rows.push(React.createElement(DGComponents.DGElementRow, { columns: [React.createElement("a", { className: "hand", onClick: function () { _this.props.app.selectResiude(residueId); } }, residueId), React.createElement("span", null, "Annotation data still loading...")] }));
                    }
                    else if (annotation !== null && annotation.length > 0) {
                        rows = rows.concat(this_1.generateSpannedRows(residueId, annotation));
                    }
                    else {
                        rows.push(React.createElement(DGComponents.DGElementRow, { columns: [React.createElement("a", { className: "hand", onClick: function () { _this.props.app.selectResiude(residueId); } }, residueId), React.createElement("span", null), React.createElement("span", null)] }));
                    }
                };
                var this_1 = this;
                for (var _i = 0, residues_3 = residues; _i < residues_3.length; _i++) {
                    var residueId = residues_3[_i];
                    _loop_1(residueId);
                }
                rows.push(React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT }));
                return rows;
            };
            DGBody.prototype.render = function () {
                var rows = this.generateRows();
                return (React.createElement("table", null, rows));
            };
            ;
            return DGBody;
        }(React.Component));
        var DGRow = (function (_super) {
            __extends(DGRow, _super);
            function DGRow() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGRow.prototype.generateRow = function (columns) {
                var tds = [];
                for (var i = 0; i < columns.length; i++) {
                    tds.push(React.createElement("td", { className: "col col-" + (i + 1) }, columns[i]));
                }
                return tds;
            };
            DGRow.prototype.render = function () {
                return (React.createElement("tr", null, this.generateRow(this.props.columns)));
            };
            return DGRow;
        }(React.Component));
    })(UI = ResidueAnnotations.UI || (ResidueAnnotations.UI = {}));
})(ResidueAnnotations || (ResidueAnnotations = {}));
var ProteinAnnotations;
(function (ProteinAnnotations) {
    var UI;
    (function (UI) {
        var React = LiteMol.Plugin.React;
        var DGComponents = Datagrid.Components;
        var DGTABLE_COLS_COUNT = 3;
        ;
        ;
        function render(target, plugin) {
            LiteMol.Plugin.ReactDOM.render(React.createElement(App, { controller: plugin }), target);
        }
        UI.render = render;
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                //private interactionEventStream: LiteMol.Bootstrap.Rx.IDisposable | undefined = void 0;
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.state = {
                    data: null,
                    app: _this
                };
                _this.layerIdx = -1;
                return _this;
            }
            App.prototype.handleData = function () {
                var annotations = Annotation.AnnotationDataProvider.getProteinAnnotations();
                if (annotations !== void 0) {
                    var state = this.state;
                    state.data = annotations;
                    this.setState(state);
                    setTimeout(function () {
                        $(window).trigger('contentResize');
                    }, 1);
                }
            };
            App.prototype.componentDidMount = function () {
                if (!Annotation.AnnotationDataProvider.isDataReady()) {
                    Annotation.AnnotationDataProvider.subscribeForData(this.handleData.bind(this));
                }
                else {
                    this.handleData();
                }
            };
            App.prototype.componentWillUnmount = function () {
            };
            App.prototype.render = function () {
                if (this.state.data !== null) {
                    return (React.createElement("div", null,
                        React.createElement(DGTable, __assign({}, this.state))));
                }
                return React.createElement("div", null,
                    React.createElement(DGNoData, __assign({}, this.state)));
            };
            return App;
        }(React.Component));
        UI.App = App;
        var DGNoData = (function (_super) {
            __extends(DGNoData, _super);
            function DGNoData() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGNoData.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-protein-annotations" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement("table", null,
                            React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT }),
                            React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT })))));
            };
            return DGNoData;
        }(React.Component));
        var DGTable = (function (_super) {
            __extends(DGTable, _super);
            function DGTable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGTable.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-protein-annotations" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement(DGBody, __assign({}, this.props)))));
            };
            return DGTable;
        }(React.Component));
        var DGHead = (function (_super) {
            __extends(DGHead, _super);
            function DGHead() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGHead.prototype.render = function () {
                return (React.createElement("table", null));
            };
            ;
            return DGHead;
        }(React.Component));
        var DGBody = (function (_super) {
            __extends(DGBody, _super);
            function DGBody() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGBody.prototype.generateLink = function (annotation) {
                if (annotation.reference === "") {
                    return "";
                }
                return React.createElement("a", { target: "_blank", href: annotation.link }, annotation.reference);
            };
            DGBody.prototype.generateSpannedRows = function (residue, annotations) {
                var trs = [];
                var first = true;
                for (var _i = 0, annotations_4 = annotations; _i < annotations_4.length; _i++) {
                    var annotation = annotations_4[_i];
                    if (first === true) {
                        first = false;
                        trs.push(React.createElement("tr", { className: (annotation.isLining) ? "highlight" : "" },
                            React.createElement("td", { className: "col col-1" }, residue),
                            React.createElement("td", { className: "col col-2" }, annotation.text),
                            React.createElement("td", { className: "col col-3" }, this.generateLink(annotation))));
                    }
                    else {
                        trs.push(React.createElement("tr", { className: (annotation.isLining) ? "highlight" : "" },
                            React.createElement("td", { className: "col col-2" }, annotation.text),
                            React.createElement("td", { className: "col col-3" }, this.generateLink(annotation))));
                    }
                }
                return trs;
            };
            DGBody.prototype.generateRows = function () {
                if (this.props.data === null) {
                    return React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT });
                }
                var annotations = this.props.data;
                var rows = [];
                for (var _i = 0, annotations_5 = annotations; _i < annotations_5.length; _i++) {
                    var annotation = annotations_5[_i];
                    var noDataText = "No data provided";
                    rows.push(React.createElement(DGComponents.DGRow, { columns: ["Name:", annotation.name], trClass: "highlight hl-main" }));
                    rows.push(React.createElement(DGComponents.DGElementRow, { columns: [React.createElement("span", null, "UniProt Id:"), React.createElement("a", { href: annotation.link, target: "_blank" }, annotation.uniProtId)] }));
                    rows.push(React.createElement(DGComponents.DGRow, { columns: ["Function:"], columnsCount: DGTABLE_COLS_COUNT, trClass: "highlight" }));
                    rows.push(React.createElement(DGComponents.DGRow, { columns: [(annotation.function !== null && annotation.function !== "") ? annotation.function : noDataText], columnsCount: DGTABLE_COLS_COUNT, trClass: "justify" }));
                    rows.push(React.createElement(DGComponents.DGRow, { columns: ["Catalytic activity:"], columnsCount: DGTABLE_COLS_COUNT, trClass: "highlight" }));
                    if (annotation.catalytics.length == 0) {
                        rows.push(React.createElement(DGComponents.DGRow, { columns: ["No data provided"], columnsCount: DGTABLE_COLS_COUNT }));
                    }
                    /*
                    let catalytics:JSX.Element[] = [];
                    for(let entry of annotation.catalytics){
                        catalytics.push(<li><span dangerouslySetInnerHTML={{__html:entry}}></span></li>);
                    }
                    rows.push(
                        <DGComponents.DGElementRow columns={[<ul>{catalytics}</ul>]} columnsCount={DGTABLE_COLS_COUNT} trClass="catalytics" />
                    );
                    */
                    for (var _a = 0, _b = annotation.catalytics; _a < _b.length; _a++) {
                        var entry = _b[_a];
                        rows.push(React.createElement(DGComponents.DGRow, { columns: [entry], columnsCount: DGTABLE_COLS_COUNT, forceHtml: true, trClass: "catalytics" }));
                    }
                }
                rows.push(React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT }));
                return rows;
            };
            DGBody.prototype.render = function () {
                var rows = this.generateRows();
                return (React.createElement("table", null, rows));
            };
            ;
            return DGBody;
        }(React.Component));
    })(UI = ProteinAnnotations.UI || (ProteinAnnotations.UI = {}));
})(ProteinAnnotations || (ProteinAnnotations = {}));
var LiningResidues;
(function (LiningResidues) {
    var UI;
    (function (UI) {
        var DGComponents = Datagrid.Components;
        var React = LiteMol.Plugin.React;
        var DGTABLE_COLS_COUNT = 2;
        var NO_DATA_MESSAGE = "Select channel in 3D view for details...";
        ;
        ;
        function render(target, plugin) {
            LiteMol.Plugin.ReactDOM.render(React.createElement(App, { controller: plugin }), target);
        }
        UI.render = render;
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.interactionEventStream = void 0;
                _this.state = {
                    data: null,
                    app: _this,
                    isWaitingForData: false
                };
                _this.layerIdx = -1;
                return _this;
            }
            App.prototype.componentDidMount = function () {
                var _this = this;
                CommonUtils.Selection.SelectionHelper.attachOnChannelSelectHandler(function (data) {
                    if (data === null) {
                        return;
                    }
                    var state = _this.state;
                    state.data = CommonUtils.Residues.sort(data.ResidueFlow, void 0, true, true);
                    _this.setState(state);
                    setTimeout(function () {
                        $(window).trigger('contentResize');
                    }, 1);
                });
            };
            App.prototype.dataWaitHandler = function () {
                var state = this.state;
                state.isWaitingForData = false;
                this.setState(state);
            };
            App.prototype.invokeDataWait = function () {
                if (this.state.isWaitingForData) {
                    return;
                }
                var state = this.state;
                state.isWaitingForData = true;
                this.setState(state);
                Annotation.AnnotationDataProvider.subscribeForData(this.dataWaitHandler.bind(this));
            };
            App.prototype.componentWillUnmount = function () {
            };
            App.prototype.render = function () {
                if (this.state.data !== null) {
                    return (React.createElement("div", null,
                        React.createElement(DGTable, __assign({}, this.state)),
                        React.createElement(Controls, __assign({}, this.state))));
                }
                return React.createElement("div", null,
                    React.createElement(DGNoData, __assign({}, this.state)));
            };
            return App;
        }(React.Component));
        UI.App = App;
        function residueStringToResidueLight(residue) {
            /*
            [0 , 1 ,2 ,  3   ]
            VAL 647 A Backbone
            */
            var residueParts = residue.split(" ");
            var rv = {
                authSeqNumber: Number(residueParts[1]),
                chain: {
                    authAsymId: residueParts[2]
                }
            };
            return rv;
        }
        var Controls = (function (_super) {
            __extends(Controls, _super);
            function Controls() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            Controls.prototype.clearSelection = function () {
                CommonUtils.Selection.SelectionHelper.clearSelection(this.props.app.props.controller);
            };
            Controls.prototype.selectAll = function () {
                var residues = [];
                if (this.props.app.state.data === null) {
                    return;
                }
                for (var _i = 0, _a = this.props.app.state.data; _i < _a.length; _i++) {
                    var residue = _a[_i];
                    residues.push(residueStringToResidueLight(residue));
                }
                if (!CommonUtils.Selection.SelectionHelper.isBulkResiduesSelected(residues)) {
                    CommonUtils.Selection.SelectionHelper.selectResiduesBulkWithBallsAndSticks(this.props.app.props.controller, residues);
                }
            };
            Controls.prototype.render = function () {
                return React.createElement("div", { className: "lining-residues select-controls" },
                    React.createElement("span", { className: "btn-xs btn-default bt-all hand", onClick: this.selectAll.bind(this) }, "Select all"),
                    React.createElement("span", { className: "btn-xs btn-default bt-none hand", onClick: this.clearSelection.bind(this) }, "Clear selection"));
            };
            return Controls;
        }(React.Component));
        var DGNoData = (function (_super) {
            __extends(DGNoData, _super);
            function DGNoData() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGNoData.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-lining-residues" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement("table", null,
                            React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT, infoText: NO_DATA_MESSAGE }),
                            React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT })))));
            };
            return DGNoData;
        }(React.Component));
        var DGTable = (function (_super) {
            __extends(DGTable, _super);
            function DGTable() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGTable.prototype.render = function () {
                return (React.createElement("div", { className: "datagrid", id: "dg-lining-residues" },
                    React.createElement("div", { className: "header" },
                        React.createElement(DGHead, __assign({}, this.props))),
                    React.createElement("div", { className: "body" },
                        React.createElement(DGBody, __assign({}, this.props)))));
            };
            return DGTable;
        }(React.Component));
        var DGHead = (function (_super) {
            __extends(DGHead, _super);
            function DGHead() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGHead.prototype.render = function () {
                return (React.createElement("table", null,
                    React.createElement("tr", null,
                        React.createElement("th", { title: "Residue", className: "col col-1" }, "Residue"),
                        React.createElement("th", { title: "Annotation", className: "col col-2" }, "Annotation"))));
            };
            ;
            return DGHead;
        }(React.Component));
        var DGBody = (function (_super) {
            __extends(DGBody, _super);
            function DGBody() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DGBody.prototype.generateLink = function (annotation) {
                if (annotation.reference === "") {
                    return (annotation.text !== void 0 && annotation.text !== null) ? React.createElement("span", null, annotation.text) : React.createElement("span", { className: "no-annotation" });
                }
                return React.createElement("a", { target: "_blank", href: annotation.link, dangerouslySetInnerHTML: { __html: annotation.text } });
            };
            DGBody.prototype.shortenBackbone = function (residue) {
                return residue.replace(/Backbone/g, '');
            };
            DGBody.prototype.isBackbone = function (residue) {
                return residue.indexOf("Backbone") >= 0;
            };
            DGBody.prototype.selectResidue = function (residue) {
                var residueLightEntity = residueStringToResidueLight(residue);
                if (!CommonUtils.Selection.SelectionHelper.isSelectedLight(residueLightEntity)) {
                    CommonUtils.Selection.SelectionHelper.selectResidueByAuthAsymIdAndAuthSeqNumberWithBallsAndSticks(this.props.app.props.controller, residueLightEntity);
                }
            };
            DGBody.prototype.getSelect3DLink = function (residue) {
                var _this = this;
                var residueEl = (this.isBackbone(residue)) ? React.createElement("i", null,
                    React.createElement("strong", null, this.shortenBackbone(residue))) : React.createElement("span", null, residue);
                return React.createElement("a", { className: "hand", onClick: function (e) { _this.selectResidue(residue); } }, residueEl);
            };
            DGBody.prototype.generateSpannedRows = function (residue, annotations) {
                var trs = [];
                var residueNameEl = this.getSelect3DLink(residue); //(this.isBackbone(residue))?<i><strong>{this.shortenBackbone(residue)}</strong></i>:<span>{residue}</span>;
                var first = true;
                for (var _i = 0, annotations_6 = annotations; _i < annotations_6.length; _i++) {
                    var annotation = annotations_6[_i];
                    if (first === true) {
                        first = false;
                        trs.push(React.createElement("tr", { title: (this.isBackbone(residue) ? residue : ""), className: (this.isBackbone(residue) ? "help" : "") },
                            React.createElement("td", { className: "col col-1", rowSpan: (annotations.length > 1) ? annotations.length : void 0 }, residueNameEl),
                            React.createElement("td", { className: "col col-2" }, this.generateLink(annotation))));
                    }
                    else {
                        trs.push(React.createElement("tr", null,
                            React.createElement("td", { className: "col col-2" }, this.generateLink(annotation))));
                    }
                }
                return trs;
            };
            DGBody.prototype.generateRows = function () {
                if (this.props.data === null) {
                    return React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT, infoText: NO_DATA_MESSAGE });
                }
                var rows = [];
                for (var _i = 0, _a = this.props.data; _i < _a.length; _i++) {
                    var residue = _a[_i];
                    var residueId = residue.split(" ").slice(1, 3).join(" ");
                    var annotation = void 0;
                    var annotationText = "";
                    var annotationSource = "";
                    annotation = Annotation.AnnotationDataProvider.getResidueAnnotations(residueId);
                    //let residueNameEl = (this.isBackbone(residue))?<i><strong>{this.shortenBackbone(residue)}</strong></i>:<span>{residue}</span>;
                    if (annotation === void 0) {
                        this.props.app.invokeDataWait();
                        rows.push(React.createElement(DGComponents.DGElementRow, { columns: [this.getSelect3DLink(residue), React.createElement("span", null, "Annotation data still loading...")], title: [(this.isBackbone(residue) ? residue : ""), ""], trClass: (this.isBackbone(residue) ? "help" : "") }));
                    }
                    else if (annotation !== null && annotation.length > 0) {
                        rows = rows.concat(this.generateSpannedRows(residue, annotation));
                    }
                    else {
                        rows.push(React.createElement(DGComponents.DGElementRow, { columns: [this.getSelect3DLink(residue), React.createElement("span", null)], title: [(this.isBackbone(residue) ? residue : ""), (this.isBackbone(residue) ? residue : "")], trClass: (this.isBackbone(residue) ? "help" : "") }));
                    }
                }
                rows.push(React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT }));
                return rows;
            };
            DGBody.prototype.generateRows_old = function () {
                if (this.props.data === null) {
                    return React.createElement(DGComponents.DGNoDataInfoRow, { columnsCount: DGTABLE_COLS_COUNT, infoText: NO_DATA_MESSAGE });
                }
                var rows = [];
                for (var _i = 0, _a = this.props.data; _i < _a.length; _i++) {
                    var residue = _a[_i];
                    var residueId = residue.split(" ").slice(1, 3).join(" ");
                    rows.push(React.createElement(DGComponents.DGElementRow, { columns: [this.getSelect3DLink(residue)], title: [(this.isBackbone(residue) ? residue : "")], trClass: (this.isBackbone(residue) ? "help" : "") }));
                }
                rows.push(React.createElement(DGComponents.DGRowEmpty, { columnsCount: DGTABLE_COLS_COUNT }));
                return rows;
            };
            DGBody.prototype.render = function () {
                var rows = this.generateRows();
                return (React.createElement("table", null, rows));
            };
            ;
            return DGBody;
        }(React.Component));
    })(UI = LiningResidues.UI || (LiningResidues.UI = {}));
})(LiningResidues || (LiningResidues = {}));
var DownloadReport;
(function (DownloadReport) {
    var UI;
    (function (UI) {
        var React = LiteMol.Plugin.React;
        function render(target) {
            LiteMol.Plugin.ReactDOM.render(React.createElement(App, null), target);
        }
        UI.render = render;
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            App.prototype.componentDidMount = function () {
            };
            App.prototype.componentWillUnmount = function () {
            };
            App.prototype.render = function () {
                return React.createElement("div", null,
                    React.createElement(DownloadResultsMenu, null));
            };
            return App;
        }(React.Component));
        UI.App = App;
        var BootstrapDropDownMenuItem = (function (_super) {
            __extends(BootstrapDropDownMenuItem, _super);
            function BootstrapDropDownMenuItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BootstrapDropDownMenuItem.prototype.render = function () {
                return (React.createElement("li", null,
                    React.createElement("a", { target: (this.props.targetBlank) ? "_blank" : "", href: this.props.link }, this.props.linkText)));
            };
            return BootstrapDropDownMenuItem;
        }(React.Component));
        var BootstrapDropDownMenuElementItem = (function (_super) {
            __extends(BootstrapDropDownMenuElementItem, _super);
            function BootstrapDropDownMenuElementItem() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BootstrapDropDownMenuElementItem.prototype.render = function () {
                return (React.createElement("li", null,
                    React.createElement("a", { target: (this.props.targetBlank) ? "_blank" : "", href: this.props.link }, this.props.linkElement)));
            };
            return BootstrapDropDownMenuElementItem;
        }(React.Component));
        var BootstrapDropDownMenuButton = (function (_super) {
            __extends(BootstrapDropDownMenuButton, _super);
            function BootstrapDropDownMenuButton() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            BootstrapDropDownMenuButton.prototype.render = function () {
                return React.createElement("div", { className: "btn-group dropdown" },
                    React.createElement("button", { type: "button", className: "download dropdown-toggle", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" },
                        this.props.label,
                        " ",
                        React.createElement("span", { className: "glyphicon glyphicon-download" })),
                    React.createElement("ul", { className: "dropdown-menu" }, this.props.items));
            };
            return BootstrapDropDownMenuButton;
        }(React.Component));
        var DownloadResultsMenu = (function (_super) {
            __extends(DownloadResultsMenu, _super);
            function DownloadResultsMenu() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            DownloadResultsMenu.prototype.render = function () {
                var pdbid = SimpleRouter.GlobalRouter.getCurrentPid();
                var linkBase = "https://webchem.ncbr.muni.cz/API/ChannelsDB/Download/" + pdbid;
                var items = [];
                items.push(React.createElement(BootstrapDropDownMenuItem, { linkText: ".zip", link: linkBase + "?type=zip", targetBlank: true }));
                items.push(React.createElement(BootstrapDropDownMenuItem, { linkText: ".pdb", link: linkBase + "?type=pdb", targetBlank: true }));
                items.push(React.createElement(BootstrapDropDownMenuItem, { linkText: ".json", link: linkBase + "?type=json", targetBlank: true }));
                items.push(React.createElement(BootstrapDropDownMenuItem, { linkText: ".py", link: linkBase + "?type=py", targetBlank: true }));
                return React.createElement(BootstrapDropDownMenuButton, { label: "Download report", items: items });
            };
            return DownloadResultsMenu;
        }(React.Component));
    })(UI = DownloadReport.UI || (DownloadReport.UI = {}));
})(DownloadReport || (DownloadReport = {}));
var PdbIdSign;
(function (PdbIdSign) {
    var UI;
    (function (UI) {
        var React = LiteMol.Plugin.React;
        function render(target) {
            LiteMol.Plugin.ReactDOM.render(React.createElement(App, null), target);
        }
        UI.render = render;
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            App.prototype.componentDidMount = function () {
            };
            App.prototype.componentWillUnmount = function () {
            };
            App.prototype.render = function () {
                var pdbid = SimpleRouter.GlobalRouter.getCurrentPid();
                return React.createElement("div", null,
                    React.createElement("a", { href: "https://pdbe.org/" + pdbid, target: "_blank" },
                        pdbid,
                        " ",
                        React.createElement("span", { className: "glyphicon glyphicon-new-window href-ico" })));
            };
            return App;
        }(React.Component));
        UI.App = App;
    })(UI = PdbIdSign.UI || (PdbIdSign.UI = {}));
})(PdbIdSign || (PdbIdSign = {}));
var SimpleRouter;
(function (SimpleRouter) {
    var URL = (function () {
        function URL(url, hasHost) {
            if (hasHost === void 0) { hasHost = true; }
            this.url = this.removeLastSlash(url);
            this.parts = this.removeTrailingSlashes(url).split("/");
            this.hasHost = hasHost;
            this.parameters = this.parseURLParameters(url);
            this.protocol = this.parseProtocol(url);
        }
        URL.prototype.removeProtocolPart = function (url) {
            var parts = this.url.split("//");
            return parts[parts.length - 1];
        };
        URL.prototype.removeLastSlash = function (url) {
            if (url[url.length - 1] === "/" || url[url.length - 1] === "\\") {
                return url.slice(0, url.length - 1);
            }
            return url;
        };
        URL.prototype.removeBeginingSlash = function (url) {
            if (url[0] === "/" || url[0] === "\\") {
                return url.slice(1);
            }
            return url;
        };
        URL.prototype.removeTrailingSlashes = function (url) {
            return this.removeLastSlash(this.removeBeginingSlash(this.removeProtocolPart(url)));
        };
        URL.prototype.substractPathFromStart = function (path) {
            var substractPathParts = this.removeBeginingSlash(path).split("/");
            var urlSubstracted = [];
            for (var idx = (this.hasHost ? 1 : 0), i = 0; idx < this.parts.length; idx++, i++) {
                if (i < substractPathParts.length && this.parts[idx] === substractPathParts[i]) {
                    continue;
                }
                urlSubstracted.push(this.parts[idx]);
            }
            return new URL(URL.constructPath(urlSubstracted), false);
        };
        URL.prototype.getHostname = function () {
            if (!this.hasHost) {
                return "";
            }
            return this.parts[0];
        };
        URL.prototype.getPart = function (index) {
            return this.parts[index];
        };
        URL.prototype.getLength = function () {
            return this.parts.length;
        };
        URL.constructPath = function (pathParts, useProtocol, protocol) {
            if (useProtocol === void 0) { useProtocol = false; }
            if (protocol === void 0) { protocol = "http"; }
            var url = "";
            for (var i = 0; i < pathParts.length; i++) {
                if (pathParts[i] === "") {
                    continue;
                }
                url += "/" + pathParts[i];
            }
            if (useProtocol) {
                url = protocol + ":/" + url;
            }
            return url;
        };
        URL.prototype.getLastPart = function () {
            return this.getPart(this.getLength() - 1);
        };
        URL.prototype.getParameterValue = function (name) {
            if (!this.parameters.has(name)) {
                return null;
            }
            var value = this.parameters.get(name);
            if (value === void 0) {
                return null;
            }
            return value;
        };
        URL.prototype.parseURLParameters = function (url) {
            var parts = url.split("?");
            var parameters = new Map();
            if (parts.length !== 2) {
                return parameters;
            }
            var params = parts[1].split("&");
            for (var i = 0; i < params.length; i++) {
                var tuple = params[i].split("=");
                var key = tuple[0];
                var value = "";
                if (tuple.length === 2) {
                    value = tuple[1];
                }
                parameters.set(key, value);
            }
            return parameters;
        };
        URL.prototype.parseProtocol = function (url) {
            var protocol = url.split(":");
            if (protocol.length > 1) {
                return protocol[0];
            }
            return "";
        };
        URL.prototype.getProtocol = function () {
            if (!this.hasHost) {
                return "";
            }
            return this.protocol;
        };
        URL.prototype.toString = function () {
            return URL.constructPath(this.parts, this.hasHost, this.getProtocol());
        };
        return URL;
    }());
    SimpleRouter.URL = URL;
    var Router = (function () {
        function Router(contextPath) {
            this.contextPath = contextPath;
        }
        /* Buggy !!
        getRelativePath(){
            return new SrURL(document.URL).substractPathFromStart(this.contextPath);
        }
        */
        Router.prototype.getAbsoluePath = function () {
            return new URL(document.URL);
        };
        Router.prototype.changeUrl = function (name, windowTitle, url) {
            var stateObj = { page: name };
            history.pushState(stateObj, windowTitle, url);
        };
        return Router;
    }());
    SimpleRouter.Router = Router;
    ;
    var GlobalRouter = (function () {
        function GlobalRouter() {
        }
        GlobalRouter.init = function (routingParameters) {
            this.defaultContextPath = routingParameters.defaultContextPath;
            this.defaultPid = routingParameters.defaultPid;
            this.useParameterAsPid = (routingParameters.useParameterAsPid === void 0) ? false : routingParameters.useParameterAsPid;
            this.useLastPathPartAsPid = (routingParameters.useLastPathPartAsPid === void 0) ? false : routingParameters.useLastPathPartAsPid;
            this.router = new Router(routingParameters.defaultContextPath);
            var url = this.router.getAbsoluePath();
            var pid = null;
            if (this.useParameterAsPid === true) {
                pid = url.getParameterValue("pid");
            }
            else if (this.useLastPathPartAsPid === true) {
                var lastPathPartAsParam = url.substractPathFromStart(this.defaultContextPath).getLastPart();
                pid = lastPathPartAsParam === "" ? null : lastPathPartAsParam;
            }
            this.currentPid = (pid !== null) ? pid : this.defaultPid;
            if (pid !== this.currentPid) {
                if (this.useParameterAsPid === true) {
                    this.router.changeUrl("detail", document.title, url + "/?pid=" + this.currentPid);
                }
                else if (this.useLastPathPartAsPid === true) {
                    this.router.changeUrl("detail", document.title, url + "/" + this.currentPid);
                }
            }
            this.isInitialized = true;
        };
        GlobalRouter.getCurrentPid = function () {
            if (!this.isInitialized) {
                throw new Error("GlobalRouter is not inititalised! Call init(..) function before use!");
            }
            return this.currentPid;
        };
        return GlobalRouter;
    }());
    GlobalRouter.isInitialized = false;
    SimpleRouter.GlobalRouter = GlobalRouter;
})(SimpleRouter || (SimpleRouter = {}));
/*
 * Copyright (c) 2016 - now David Sehnal, licensed under Apache 2.0, See LICENSE file for more info.
 */
var LiteMol;
/*
 * Copyright (c) 2016 - now David Sehnal, licensed under Apache 2.0, See LICENSE file for more info.
 */
(function (LiteMol) {
    var Example;
    (function (Example) {
        var Channels;
        (function (Channels) {
            var State;
            (function (State) {
                var _this = this;
                var Transformer = LiteMol.Bootstrap.Entity.Transformer;
                var COORDINATE_SERVERS = {
                    "ebi-http": "http://www.ebi.ac.uk/pdbe/coordinates",
                    "ceitec-https": "https://webchem.ncbr.muni.cz/CoordinateServer"
                };
                var COORDINATE_SERVER = "ceitec-https";
                function showDefaultVisuals(plugin, data, channelCount) {
                    return new LiteMol.Promise(function (res) {
                        var toShow = [];
                        if (data.ReviewedChannels.length > 0) {
                            toShow = data.ReviewedChannels;
                        }
                        else if (data.CSATunnels.length > 0) {
                            toShow = data.CSATunnels;
                        }
                        else if (data.TransmembranePores.length > 0) {
                            toShow = data.TransmembranePores;
                        }
                        else if (data.CofactorTunnels.length > 0) {
                            toShow = data.CofactorTunnels;
                        }
                        return showChannelVisuals(plugin, toShow /*.slice(0, channelCount)*/, true).then(function () {
                            if (data.Cavities === void 0) {
                                res();
                                return;
                            }
                            var cavity = data.Cavities.Cavities[0];
                            if (!cavity) {
                                res();
                                return;
                            }
                            showCavityVisuals(plugin, [cavity], true).then(function () { return res(); });
                        });
                    });
                }
                function loadData(plugin, pdbId, url) {
                    plugin.clear();
                    //Subscribe for data
                    Annotation.AnnotationDataProvider.subscribeToPluginContext(plugin.context);
                    var modelLoadPromise = new LiteMol.Promise(function (res, rej) {
                        var assemblyInfo = plugin.createTransform().add(plugin.root, Transformer.Data.Download, {
                            url: "https://webchem.ncbr.muni.cz/API/ChannelsDB/Assembly/" + pdbId,
                            type: 'String',
                            id: 'AssemblyInfo'
                        }, { isHidden: false })
                            .then(Transformer.Data.ParseJson, { id: 'AssemblyInfo' }, { ref: 'assembly-id' });
                        plugin.applyTransform(assemblyInfo).then(function () {
                            var parsedData = plugin.context.select('assembly-id')[0];
                            if (!parsedData)
                                throw new Error('Data not available.');
                            else {
                                var assemblyId = parsedData.props.data.AssemblyID;
                                var model = plugin.createTransform()
                                    .add(plugin.root, Transformer.Data.Download, { url: COORDINATE_SERVERS[COORDINATE_SERVER] + "/" + pdbId + "/assembly?id=" + assemblyId, type: 'String', id: pdbId })
                                    .then(Transformer.Molecule.CreateFromData, { format: LiteMol.Core.Formats.Molecule.SupportedFormats.mmCIF }, { isBinding: true })
                                    .then(Transformer.Molecule.CreateModel, { modelIndex: 0 })
                                    .then(Transformer.Molecule.CreateMacromoleculeVisual, { polymer: true, polymerRef: 'polymer-visual', het: true });
                                plugin.applyTransform(model)
                                    .then(function () {
                                    if (plugin.context.select('polymer-visual').length !== 1) {
                                        rej("Application was unable to retrieve protein structure from coordinate server.");
                                    }
                                    plugin.command(LiteMol.Bootstrap.Command.Entity.Focus, plugin.context.select('polymer-visual'));
                                    res();
                                });
                            }
                        });
                    });
                    /*
                    let model = plugin.createTransform()
                            .add(plugin.root, Transformer.Data.Download, { url: `http://www.ebi.ac.uk/pdbe/coordinates/${pdbId}/assembly?id=1`, type: 'String', id: pdbId })
                            .then(Transformer.Molecule.CreateFromData, { format: Core.Formats.Molecule.SupportedFormats.mmCIF }, { isBinding: true })
                            .then(Transformer.Molecule.CreateModel, { modelIndex: 0 })
                            .then(Transformer.Molecule.CreateMacromoleculeVisual, { polymer: true, polymerRef: 'polymer-visual', het: true })
                    */
                    var data = plugin.createTransform().add(plugin.root, Transformer.Data.Download, { url: url, type: 'String', id: 'MOLE Data' }, { isHidden: false })
                        .then(Transformer.Data.ParseJson, { id: 'MOLE Data' }, { ref: 'mole-data' });
                    var annotationData = plugin.createTransform().add(plugin.root, Transformer.Data.Download, { url: "https://webchem.ncbr.muni.cz/API/ChannelsDB/Annotations/" + pdbId, type: 'String', id: 'ChannelDB annotation Data' }, { isHidden: false })
                        .then(Transformer.Data.ParseJson, { id: 'ChannelDB annotation Data' }, { ref: 'channelsDB-annotation-data' });
                    var promises = [];
                    promises.push(modelLoadPromise);
                    /*
                    promises.push(plugin.applyTransform(model)
                        .then(() => {
                            plugin.command(Bootstrap.Command.Entity.Focus, plugin.context.select('polymer-visual'));
                        }));
                    */
                    promises.push(plugin.applyTransform(data)
                        .then(function () {
                        var parsedData = plugin.context.select('mole-data')[0];
                        if (!parsedData)
                            throw new Error('Data not available.');
                        else {
                            var data_ = parsedData.props.data;
                            showDefaultVisuals(plugin, data_.Channels, /*data_.Channels.length*/ 2); /*.then(() => res(data_.Channels));*/
                        }
                    }));
                    //promises.push(plugin.applyTransform(annotationData));
                    plugin.applyTransform(annotationData); //Annotations se donačtou později -> nebude se na ně čekat s vykreslováním UI
                    return LiteMol.Promise.all(promises);
                }
                State.loadData = loadData;
                function createSurface(mesh) {
                    // wrap the vertices in typed arrays
                    if (!(mesh.Vertices instanceof Float32Array)) {
                        mesh.Vertices = new Float32Array(mesh.Vertices);
                    }
                    if (!(mesh.Vertices instanceof Uint32Array)) {
                        mesh.Triangles = new Uint32Array(mesh.Triangles);
                    }
                    var surface = {
                        vertices: mesh.Vertices,
                        vertexCount: (mesh.Vertices.length / 3) | 0,
                        triangleIndices: new Uint32Array(mesh.Triangles),
                        triangleCount: (mesh.Triangles.length / 3) | 0,
                    };
                    return surface;
                }
                var colorIndex = LiteMol.Visualization.Molecule.Colors.DefaultPallete.length - 1;
                function nextColor() {
                    return LiteMol.Visualization.Color.random();
                    // can use the build in palette for example like this:
                    // let color = Visualization.Molecule.Colors.DefaultPallete[colorIndex];
                    // colorIndex--;
                    // if (colorIndex < 0) colorIndex = Visualization.Molecule.Colors.DefaultPallete.length - 1;
                    // return color;
                }
                function getBoundingBox(centerline) {
                    var first = centerline[0];
                    var minX = first.X - first.Radius, minY = first.Y - first.Radius, minZ = first.Z - first.Radius;
                    var maxX = first.X + first.Radius, maxY = first.Y + first.Radius, maxZ = first.Z + first.Radius;
                    for (var _i = 0, centerline_1 = centerline; _i < centerline_1.length; _i++) {
                        var s = centerline_1[_i];
                        minX = Math.min(minX, s.X - s.Radius);
                        maxX = Math.max(minX, s.X + s.Radius);
                        minY = Math.min(minY, s.Y - s.Radius);
                        maxY = Math.max(minY, s.Y + s.Radius);
                        minX = Math.min(minZ, s.Z - s.Radius);
                        maxX = Math.max(minZ, s.Z + s.Radius);
                    }
                    var bottomLeft = LiteMol.Core.Geometry.LinearAlgebra.Vector3(minX, minY, minZ);
                    var topRight = LiteMol.Core.Geometry.LinearAlgebra.Vector3(maxX, maxY, maxZ);
                    return { bottomLeft: bottomLeft, topRight: topRight };
                }
                function getDensity(boundingBox) {
                    var box = LiteMol.Core.Geometry.LinearAlgebra.Vector3.sub(boundingBox.topRight, boundingBox.topRight, boundingBox.bottomLeft);
                    var density = Math.pow(((Math.pow(99, 3)) / (box[0] * box[1] * box[2])), (1 / 3));
                    if (density > 4)
                        return 4;
                    if (density < 0.1)
                        return 0.1;
                    return density;
                }
                //Added
                function createTunnelSurfaceMarchCubes(sphereArray) {
                    var idxFilter = 1;
                    var posTableBuilder = LiteMol.Core.Utils.DataTable.builder(Math.ceil(sphereArray.length / idxFilter));
                    posTableBuilder.addColumn("x", LiteMol.Core.Utils.DataTable.customColumn());
                    posTableBuilder.addColumn("y", LiteMol.Core.Utils.DataTable.customColumn());
                    posTableBuilder.addColumn("z", LiteMol.Core.Utils.DataTable.customColumn());
                    var rowIdx = 0;
                    var positions = posTableBuilder.seal();
                    var sphereCounter = 0;
                    for (var _i = 0, sphereArray_1 = sphereArray; _i < sphereArray_1.length; _i++) {
                        var sphere = sphereArray_1[_i];
                        sphereCounter++;
                        if ((sphereCounter - 1) % idxFilter !== 0) {
                            continue;
                        }
                        positions.x[rowIdx] = sphere.X.valueOf();
                        positions.y[rowIdx] = sphere.Y.valueOf();
                        positions.z[rowIdx] = sphere.Z.valueOf();
                        rowIdx++;
                    }
                    return LiteMol.Core.Geometry.MolecularSurface.computeMolecularSurfaceAsync({
                        positions: positions,
                        atomIndices: positions.indices,
                        parameters: {
                            atomRadius: (function (i) {
                                return sphereArray[i * idxFilter].Radius.valueOf();
                            }),
                            density: getDensity(getBoundingBox(sphereArray)),
                            probeRadius: 0,
                            smoothingIterations: 4,
                            interactive: false,
                        },
                    }).run();
                }
                function createSphere(radius, center, id, tessalation) {
                    if (id === void 0) {
                        id = 0;
                    }
                    if (tessalation === void 0) {
                        tessalation = 1;
                    }
                    return { type: 'Sphere', id: 0, radius: radius, center: [center.x, center.y, center.z], tessalation: tessalation };
                }
                //Added
                function createTunnelSurface(sphereArray) {
                    var s = LiteMol.Visualization.Primitive.Builder.create();
                    var id = 0;
                    var idxFilter = 1;
                    var idxCounter = 0;
                    for (var _i = 0, sphereArray_2 = sphereArray; _i < sphereArray_2.length; _i++) {
                        var sphere = sphereArray_2[_i];
                        idxCounter++;
                        if ((idxCounter - 1) % idxFilter !== 0) {
                            continue;
                        }
                        var center = { x: sphere.X, y: sphere.Y, z: sphere.Z };
                        s.add(createSphere(sphere.Radius, center, 0, 2));
                    }
                    return s.buildSurface().run();
                }
                function adjustRadius(profileRadius, maxProfileRadius, maxLayerRadius) {
                    return (maxLayerRadius / maxProfileRadius) * profileRadius;
                }
                function getLayerRadiusByDistance(distance, layers, lastLayerIdx) {
                    var __start = layers.LayersInfo[lastLayerIdx].LayerGeometry.StartDistance;
                    var __end = layers.LayersInfo[lastLayerIdx].LayerGeometry.EndDistance;
                    var __s = Math.max(__start, distance);
                    var __e = Math.min(__end, distance);
                    //console.log({__start,__end,__s,__e,distance,lastLayerIdx});
                    if (__e - __s === 0) {
                        return layers.LayersInfo[lastLayerIdx].LayerGeometry.MinRadius;
                    }
                    lastLayerIdx++;
                    if (lastLayerIdx === layers.LayersInfo.length) {
                        return 0;
                    }
                    return getLayerRadiusByDistance(distance, layers, lastLayerIdx);
                }
                function buildRingSurface(s, spheres, id, parts) {
                    if (parts === void 0) { parts = 8; }
                    var sphere = spheres[id];
                    if (id === 0 || id === spheres.length - 1) {
                        //{ type: 'Sphere', id, radius: sphere.Radius, center: [sphere.X, sphere.Y, sphere.Z ], tessalation: 2 }
                        s.add(createSphere(sphere.Radius, { x: sphere.X, y: sphere.Y, z: sphere.Z }, 0, 2));
                        return;
                    }
                    ;
                    var prevSphere = spheres[id - 1];
                    var nextSphere = spheres[id + 1];
                    var normalize = function (vec3) {
                        var __divisor = Math.max(Math.abs(vec3.x), Math.abs(vec3.y), Math.abs(vec3.z));
                        if (__divisor === 0) {
                            return vec3;
                        }
                        return { x: vec3.x / __divisor, y: vec3.y / __divisor, z: vec3.z / __divisor };
                    };
                    var greatest = function (vec3) {
                        var __max = Math.max(Math.abs(vec3.x), Math.abs(vec3.y), Math.abs(vec3.z));
                        return (__max === vec3.x) ? 0 : (__max === vec3.y) ? 1 : 2;
                    };
                    var rotateByMat = function (vec3, mat) {
                        return multiplyMatVec(mat, vec3);
                    };
                    //OK
                    var multiplyMatMat = function (m1, m2) {
                        var mat = [];
                        for (var m1r = 0; m1r < 3; m1r++) {
                            var row = [];
                            for (var m2c = 0; m2c < 3; m2c++) {
                                var a = 0;
                                for (var m2r = 0; m2r < 3; m2r++) {
                                    a += m1[m1r][m2r] * m2[m2r][m2c];
                                }
                                row.push(a);
                            }
                            mat.push(row);
                        }
                        return mat;
                    };
                    var tstMat1 = [
                        [1, 2, 3],
                        [4, 5, 6],
                        [7, 8, 9]
                    ];
                    var tstMat2 = [
                        [9, 8, 7],
                        [6, 5, 4],
                        [3, 2, 1]
                    ];
                    //console.log("TSTMAT:");
                    //console.log(multiplyMatMat(tstMat1,tstMat2));
                    //OK
                    var multiplyMatVec = function (m, v) {
                        var __u = [];
                        for (var row = 0; row < 3; row++) {
                            __u.push(m[row][0] * v.x + m[row][1] * v.y + m[row][2] * v.z);
                        }
                        return {
                            x: __u[0],
                            y: __u[1],
                            z: __u[2]
                        };
                    };
                    //console.log("TSTMATVEC:");
                    //console.log(multiplyMatVec(tstMat1,{x:1,y:2,z:3}));
                    var toRad = function (degrees) {
                        return (degrees * Math.PI) / 180;
                    };
                    var Rx = function (radFi) {
                        return [
                            [1, 0, 0],
                            [0, Math.cos(radFi), -Math.sin(radFi)],
                            [0, Math.sin(radFi), Math.cos(radFi)]
                        ];
                    };
                    var Ry = function (radFi) {
                        return [
                            [Math.cos(radFi), 0, Math.sin(radFi)],
                            [0, 1, 0],
                            [-Math.sin(radFi), 0, Math.cos(radFi)]
                        ];
                    };
                    var Rz = function (radFi) {
                        return [
                            [Math.cos(radFi), -Math.sin(radFi), 0],
                            [Math.sin(radFi), Math.cos(radFi), 0],
                            [0, 0, 1]
                        ];
                    };
                    var Rxy = function (radFi) {
                        return multiplyMatMat(Rx(radFi), Ry(radFi));
                    };
                    var Ryz = function (radFi) {
                        return multiplyMatMat(Ry(radFi), Rz(radFi));
                    };
                    var Rxz = function (radFi) {
                        return multiplyMatMat(Rx(radFi), Rz(radFi));
                    };
                    var n = {
                        x: nextSphere.X - prevSphere.X,
                        y: nextSphere.Y - prevSphere.Y,
                        z: nextSphere.Z - prevSphere.Z
                    };
                    n = normalize(n);
                    var majorAxis = greatest(n);
                    var v;
                    switch (majorAxis) {
                        case 0:
                            v = rotateByMat(n, Rz(toRad(90)));
                            break;
                        case 1:
                            v = rotateByMat(n, Rx(toRad(90)));
                            break;
                        default:
                            v = rotateByMat(n, Ry(toRad(90)));
                            break;
                    }
                    var radius = (2 * Math.PI * sphere.Radius) / parts;
                    for (var i = 0; i < parts; i++) {
                        var u = void 0;
                        switch (majorAxis) {
                            case 0:
                                u = rotateByMat(n, Rxy(toRad(i * (360 / parts))));
                                break;
                            case 1:
                                u = rotateByMat(n, Ryz(toRad(i * (360 / parts))));
                                break;
                            default:
                                u = rotateByMat(n, Rxz(toRad(i * (360 / parts))));
                                break;
                        }
                        u = normalize(u);
                        var center = {
                            x: sphere.X + u.x * sphere.Radius,
                            y: sphere.Y + u.y * sphere.Radius,
                            z: sphere.Z + u.z * sphere.Radius
                        };
                        //{ type: 'Sphere', id, radius:1, center, tessalation: 2 }
                        s.add(createSphere(1, center, id, 2));
                    }
                }
                //Added
                function createTunnelSurfaceWithLayers(sphereArray, layers) {
                    //let layerProfileMap = new Map<number,>
                    var id = 0;
                    //let promises = [];
                    var s = LiteMol.Visualization.Primitive.Builder.create();
                    for (var _i = 0, sphereArray_3 = sphereArray; _i < sphereArray_3.length; _i++) {
                        var sphere = sphereArray_3[_i];
                        buildRingSurface(s, sphereArray, id++);
                    }
                    return s.buildSurface().run();
                    /*
                            return Promise.all(promises).then(res => {
                                let s = Visualization.Primitive.Builder.create();
                                for(let i = 0;i<res.length;i++){
                                    s.add({type:'Surface', surface: res[i], id:i});
                                }
                                return s.buildSurface().run();
                            });
                      */
                }
                function showSurfaceVisuals(plugin, elements, visible, type, label, alpha) {
                    // I am modifying the original JSON response. In general this is not a very good
                    // idea and should be avoided in "real" apps.
                    var t = plugin.createTransform();
                    var needsApply = false;
                    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                        var element = elements_1[_i];
                        if (!element.__id)
                            element.__id = LiteMol.Bootstrap.Utils.generateUUID();
                        //console.log(!!element.__isVisible);
                        if (!!element.__isVisible === visible)
                            continue;
                        //console.log("for 1");
                        element.__isVisible = visible;
                        if (!element.__color) {
                            // the colors should probably be initialized when the data is loaded
                            // so that they are deterministic...
                            element.__color = nextColor();
                            //console.log("got new color");
                        }
                        if (!visible) {
                            //console.log("node removed");
                            plugin.command(LiteMol.Bootstrap.Command.Tree.RemoveNode, element.__id);
                        }
                        else {
                            //console.log("creating surface from mesh");
                            //console.log(element.Mesh);
                            var surface = createSurface(element.Mesh);
                            t.add('mole-data', State.CreateSurface, {
                                label: label(element),
                                tag: { type: type, element: element },
                                surface: surface,
                                color: element.__color,
                                isInteractive: true,
                                transparency: { alpha: alpha }
                            }, { ref: element.__id, isHidden: true });
                            needsApply = true;
                        }
                    }
                    if (needsApply) {
                        //console.log("needs apply = true");
                        return new LiteMol.Promise(function (res, rej) {
                            plugin.applyTransform(t).then(function () {
                                for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
                                    var element = elements_2[_i];
                                    element.__isBusy = false;
                                }
                                res();
                            }).catch(function (e) { return rej(e); });
                        });
                    }
                    else {
                        //console.log("needs apply = false");
                        return new LiteMol.Promise(function (res, rej) {
                            for (var _i = 0, elements_3 = elements; _i < elements_3.length; _i++) {
                                var element = elements_3[_i];
                                element.__isBusy = false;
                            }
                            res();
                        });
                    }
                }
                function showCavityVisuals(plugin, cavities, visible) {
                    return showSurfaceVisuals(plugin, cavities, visible, 'Cavity', function (cavity) { return cavity.Type + " " + cavity.Id; }, 0.33);
                }
                State.showCavityVisuals = showCavityVisuals;
                ;
                //Modified
                function showChannelVisuals(plugin, channels, visible) {
                    var label = function (channel) { return channel.Type + " " + (channel.Id + 1); };
                    /*let type = "Channel";*/
                    var alpha = 1.0;
                    var promises = [];
                    var _loop_2 = function (channel) {
                        // Stejné jako v Examples/Channels
                        if (!channel.__id)
                            channel.__id = LiteMol.Bootstrap.Utils.generateUUID();
                        if (!!channel.__isVisible === visible)
                            return "continue";
                        channel.__isVisible = visible;
                        if (!channel.__color) {
                            // the colors should probably be initialized when the data is loaded
                            // so that they are deterministic...
                            channel.__color = nextColor();
                        }
                        if (!visible) {
                            plugin.command(LiteMol.Bootstrap.Command.Tree.RemoveNode, channel.__id);
                        }
                        else {
                            //Zde se volá mnou vytvořená funkce pro generování povrchu podle koulí z JSONu(u nás zatím Centerline, u Vás Profile)
                            var sphereSurfacePromise_1 = createTunnelSurfaceMarchCubes(channel.Profile); //createTunnelSurfaceWithLayers(channel.Profile, channel.Layers);
                            promises.push(new LiteMol.Promise(function (res, rej) {
                                //Zpracování úspěšně vygenerovného povrchu tunelu
                                sphereSurfacePromise_1.then(function (val) {
                                    var surface = val;
                                    /*
                                    if(surface.surface.annotation !== void 0){
                                        console.log("---");
                                        console.log(`annotations length: ${surface.surface.annotation.length}`);
                                        console.log(`profile parts count: ${channel.Profile.length}`);
                                        console.log("---");
                                        for(let i=0;i<surface.surface.annotation.length;i++){
                                            surface.surface.annotation[i] = 0;
                                            //console.log(`surface.annotation: ${surface.surface.annotation[i]}`);
                                        }
                                    }
                                    */
                                    var t = plugin.createTransform();
                                    t.add('mole-data', State.CreateSurface, {
                                        label: label(channel),
                                        tag: { type: channel.Type, element: channel },
                                        surface: surface.surface,
                                        color: channel.__color,
                                        isInteractive: true,
                                        transparency: { alpha: alpha },
                                    }, { ref: channel.__id, isHidden: true });
                                    plugin.applyTransform(t)
                                        .then(function () {
                                        res();
                                    })
                                        .catch(function (err) {
                                        rej(err);
                                    });
                                }).catch(function (err) {
                                    rej(err);
                                });
                            }));
                        }
                    };
                    for (var _i = 0, channels_2 = channels; _i < channels_2.length; _i++) {
                        var channel = channels_2[_i];
                        _loop_2(channel);
                    }
                    return LiteMol.Promise.all(promises).then(function () {
                        for (var _i = 0, channels_3 = channels; _i < channels_3.length; _i++) {
                            var channel = channels_3[_i];
                            channel.__isBusy = false;
                        }
                    });
                }
                State.showChannelVisuals = showChannelVisuals;
                function createOriginsSurface(origins) {
                    if (origins.__surface)
                        return LiteMol.Promise.resolve(origins.__surface);
                    var s = LiteMol.Visualization.Primitive.Builder.create();
                    var id = 0;
                    for (var _i = 0, _a = origins.Points; _i < _a.length; _i++) {
                        var p = _a[_i];
                        //{ type: 'Sphere', id: id++, radius: 1.69, center: [p.X, p.Y, p.Z] }
                        s.add(createSphere(1.69, { x: p.X, y: p.Y, z: p.Z }, id++));
                    }
                    return s.buildSurface().run();
                }
                function showOriginsSurface(plugin, origins, visible) {
                    if (!origins.__id)
                        origins.__id = LiteMol.Bootstrap.Utils.generateUUID();
                    if (!origins.Points.length || !!origins.__isVisible === visible)
                        return LiteMol.Promise.resolve();
                    origins.__isVisible = visible;
                    if (!visible) {
                        plugin.command(LiteMol.Bootstrap.Command.Tree.RemoveNode, origins.__id);
                        origins.__isBusy = false;
                        return LiteMol.Promise.resolve();
                    }
                    if (!origins.__color) {
                        // the colors should probably be initialized when the data is loaded
                        // so that they are deterministic...
                        origins.__color = nextColor();
                    }
                    return new LiteMol.Promise(function (res, rej) {
                        createOriginsSurface(origins).then(function (surface) {
                            var t = plugin.createTransform()
                                .add('mole-data', State.CreateSurface, {
                                label: 'Origins ' + origins.Type,
                                tag: { type: 'Origins', element: origins },
                                surface: surface,
                                isInteractive: true,
                                color: origins.__color
                            }, { ref: origins.__id, isHidden: true });
                            plugin.applyTransform(t).then(function () {
                                origins.__isBusy = false;
                                res();
                            }).catch(rej);
                        }).catch(rej);
                    });
                }
                State.showOriginsSurface = showOriginsSurface;
                State.CreateSurface = LiteMol.Bootstrap.Tree.Transformer.create({
                    id: 'mole-example-create-surface',
                    name: 'Create Surface',
                    description: 'Create a surface entity.',
                    from: [LiteMol.Bootstrap.Entity.Data.Json],
                    to: [LiteMol.Bootstrap.Entity.Visual.Surface],
                    defaultParams: function () { return ({}); },
                    isUpdatable: false
                }, function (context, a, t) {
                    var theme = LiteMol.Visualization.Theme.createUniform({ colors: LiteMol.Core.Utils.FastMap.ofArray([['Uniform', t.params.color]]), interactive: t.params.isInteractive, transparency: t.params.transparency });
                    var style = {
                        type: 'Surface',
                        taskType: 'Silent',
                        //isNotSelectable: false,
                        params: {},
                        theme: void 0
                    };
                    return LiteMol.Bootstrap.Task.create("Create Surface", 'Silent', function (ctx) { return __awaiter(_this, void 0, void 0, function () {
                        var model;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, LiteMol.Visualization.Surface.Model.create(t.params.tag, { surface: t.params.surface, theme: theme, parameters: { isWireframe: t.params.isWireframe } }).run(ctx)];
                                case 1:
                                    model = _a.sent();
                                    return [2 /*return*/, LiteMol.Bootstrap.Entity.Visual.Surface.create(t, { label: t.params.label, model: model, style: style, isSelectable: true, tag: t.params.tag })];
                            }
                        });
                    }); });
                });
            })(State = Channels.State || (Channels.State = {}));
        })(Channels = Example.Channels || (Example.Channels = {}));
    })(Example = LiteMol.Example || (LiteMol.Example = {}));
})(LiteMol || (LiteMol = {}));
/*
 * Copyright (c) 2016 - now David Sehnal, licensed under Apache 2.0, See LICENSE file for more info.
 */
var LiteMol;
/*
 * Copyright (c) 2016 - now David Sehnal, licensed under Apache 2.0, See LICENSE file for more info.
 */
(function (LiteMol) {
    var Example;
    (function (Example) {
        var Channels;
        (function (Channels_1) {
            var UI;
            (function (UI) {
                var React = LiteMol.Plugin.React;
                function render(plugin, target) {
                    LiteMol.Plugin.ReactDOM.render(React.createElement(App, { plugin: plugin }), target);
                }
                UI.render = render;
                var App = (function (_super) {
                    __extends(App, _super);
                    function App() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.state = { isLoading: false, data: void 0, error: void 0 };
                        return _this;
                    }
                    App.prototype.componentDidMount = function () {
                        this.load();
                        $(window).on("contentResize", this.onContentResize.bind(this));
                    };
                    App.prototype.onContentResize = function (_) {
                        var prevState = this.props.plugin.context.layout.latestState;
                        this.props.plugin.setLayoutState({ isExpanded: true });
                        this.props.plugin.setLayoutState(prevState);
                    };
                    App.prototype.load = function () {
                        var _this = this;
                        this.currentProteinId = SimpleRouter.GlobalRouter.getCurrentPid();
                        this.setState({ isLoading: true, error: void 0 }); //https://webchem.ncbr.muni.cz/API/ChannelsDB/PDB/1tqn
                        Channels_1.State.loadData(this.props.plugin, this.currentProteinId, "https://webchem.ncbr.muni.cz/API/ChannelsDB/PDB/" + this.currentProteinId) //'channels.json'
                            .then(function (data) {
                            //console.log("loading done ok");
                            var _data = _this.props.plugin.context.select("mole-data")[0].props.data;
                            if (_data.Error !== void 0) {
                                _this.setState({ isLoading: false, error: _data.Error });
                            }
                            else {
                                _this.setState({
                                    isLoading: false, data: _data
                                });
                            }
                        })
                            .catch(function (e) {
                            console.log("ERR on loading: " + e);
                            _this.setState({ isLoading: false, error: 'Application was unable to load data. Please try again later.' });
                        });
                    };
                    App.prototype.render = function () {
                        var _this = this;
                        if (this.state.data) {
                            return React.createElement(Data, { data: this.state.data, plugin: this.props.plugin });
                        }
                        else {
                            var controls = [];
                            if (this.state.isLoading) {
                                controls.push(React.createElement("h1", null, "Loading..."));
                            }
                            else {
                                if (this.state.error) {
                                    var error = this.state.error;
                                    var errorMessage = (error === void 0) ? "" : error;
                                    controls.push(React.createElement("div", { className: "error-message" },
                                        React.createElement("div", null,
                                            React.createElement("b", null, "Data for specified protein are not available.")),
                                        React.createElement("div", null,
                                            React.createElement("b", null, "Reason:"),
                                            " ",
                                            React.createElement("i", { dangerouslySetInnerHTML: { __html: errorMessage } }))));
                                }
                                controls.push(React.createElement("button", { className: "reload-data btn btn-primary", onClick: function () { return _this.load(); } }, "Reload Data"));
                            }
                            return React.createElement("div", null, controls);
                        }
                    };
                    return App;
                }(React.Component));
                UI.App = App;
                var Data = (function (_super) {
                    __extends(Data, _super);
                    function Data() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Data.prototype.render = function () {
                        return React.createElement("div", null,
                            React.createElement(Selection, __assign({}, this.props)),
                            React.createElement("div", { className: "ui-header" }, "Channels"),
                            React.createElement("div", null,
                                React.createElement(Channels, { channels: this.props.data.Channels.ReviewedChannels, state: this.props, header: 'Reviewed Channels' }),
                                React.createElement(Channels, { channels: this.props.data.Channels.CSATunnels, state: this.props, header: 'CSA Tunnels' }),
                                React.createElement(Channels, { channels: this.props.data.Channels.TransmembranePores, state: this.props, header: 'Transmembrane Pores' }),
                                React.createElement(Channels, { channels: this.props.data.Channels.CofactorTunnels, state: this.props, header: 'Cofactor Tunnels' })));
                        /*
                        <h2>Empty Space</h2>
                            <Cavities cavities={[this.props.data.Cavities.Surface]} state={this.props} header='Surface' />
                            <Cavities cavities={this.props.data.Cavities.Cavities} state={this.props} header='Cavities' />
                            <Cavities cavities={this.props.data.Cavities.Voids} state={this.props} header='Voids' />
                            
                            <h2>Origins</h2>
                            <Origins origins={this.props.data.Origins.User} {...this.props} label='User Specifed (optimized)' />
                            <Origins origins={this.props.data.Origins.InputOrigins} {...this.props} label='User Specifed' />
                            <Origins origins={this.props.data.Origins.Computed} {...this.props} label='Computed' />
                            <Origins origins={this.props.data.Origins.Database} {...this.props} label='Database' />
                         */
                    };
                    return Data;
                }(React.Component));
                UI.Data = Data;
                ;
                var Selection = (function (_super) {
                    __extends(Selection, _super);
                    function Selection() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.state = { label: void 0 };
                        _this.observer = void 0;
                        _this.observerChannels = void 0;
                        return _this;
                    }
                    Selection.prototype.componentWillMount = function () {
                        var _this = this;
                        CommonUtils.Selection.SelectionHelper.attachOnResidueSelectHandler((function (r) {
                            _this.setState({ label: r.name + " " + r.authSeqNumber + " " + r.chain.authAsymId });
                        }).bind(this));
                        CommonUtils.Selection.SelectionHelper.attachOnResidueLightSelectHandler((function (r) {
                            var name = CommonUtils.Residues.getName(r.authSeqNumber, _this.props.plugin);
                            _this.setState({ label: name + " " + r.authSeqNumber + " " + r.chain.authAsymId });
                        }).bind(this));
                        CommonUtils.Selection.SelectionHelper.attachOnResidueBulkSelectHandler((function (r) {
                            var label = r.map(function (val, idx, array) {
                                var name = CommonUtils.Residues.getName(val.authSeqNumber, _this.props.plugin);
                                return name + "&nbsp;" + val.authSeqNumber + "&nbsp;" + val.chain.authAsymId;
                            }).reduce(function (prev, cur, idx, array) {
                                return "" + prev + ((idx === 0) ? '' : ',\n') + cur;
                            });
                            var items = label.split('\n');
                            var elements = [];
                            for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
                                var e = items_2[_i];
                                var lineParts = e.split('&nbsp;');
                                elements.push(React.createElement("div", null,
                                    lineParts[0],
                                    "\u00A0",
                                    lineParts[1],
                                    "\u00A0",
                                    lineParts[2]));
                            }
                            _this.setState({
                                label: React.createElement("div", { className: "columns" }, elements)
                            });
                        }).bind(this));
                        CommonUtils.Selection.SelectionHelper.attachOnClearSelectionHandler((function () {
                            _this.setState({ label: void 0 });
                        }).bind(this));
                        this.observer = this.props.plugin.subscribe(LiteMol.Bootstrap.Event.Molecule.ModelSelect, function (e) {
                            if (e.data) {
                                var r = e.data.residues[0];
                                CommonUtils.Selection.SelectionHelper.selectResidueWithBallsAndSticks(_this.props.plugin, r);
                                if (!CommonUtils.Selection.SelectionHelper.isSelectedAny()) {
                                    _this.setState({ label: void 0 });
                                }
                            }
                        });
                        this.observerChannels = this.props.plugin.subscribe(LiteMol.Bootstrap.Event.Visual.VisualSelectElement, function (e) {
                            var eventData = e.data;
                            if (e.data !== void 0 && eventData.source !== void 0 && eventData.source.props !== void 0 && eventData.source.props.tag === void 0) {
                                return;
                            }
                            if (e.data && (eventData === void 0 || e.data.kind !== 0)) {
                                if (CommonUtils.Selection.SelectionHelper.isSelectedAnyChannel()) {
                                    var data = e.data;
                                    var c = data.source.props.tag.element;
                                    var len = CommonUtils.Tunnels.getLength(c);
                                    //let bneck = CommonUtils.Tunnels.getBottleneck(c);
                                    var annotation = Annotation.AnnotationDataProvider.getChannelAnnotation(c.Id);
                                    if (annotation === void 0 || annotation === null) {
                                        _this.setState({ label: React.createElement("span", null,
                                                React.createElement("b", null, c.Type),
                                                ", ", "Length: " + len + " \u00C5") });
                                    }
                                    else {
                                        _this.setState({ label: React.createElement("span", null,
                                                React.createElement("b", null, annotation.text),
                                                ", Length: ",
                                                len,
                                                " \u00C5") });
                                    }
                                }
                                else if (!CommonUtils.Selection.SelectionHelper.isSelectedAny()) {
                                    _this.setState({ label: void 0 });
                                }
                            }
                        });
                    };
                    Selection.prototype.componentWillUnmount = function () {
                        if (this.observer) {
                            this.observer.dispose();
                            this.observer = void 0;
                        }
                        if (this.observerChannels) {
                            this.observerChannels.dispose();
                            this.observerChannels = void 0;
                        }
                    };
                    Selection.prototype.render = function () {
                        return React.createElement("div", null,
                            React.createElement("div", { className: "ui-selection-header" }, "Selection"),
                            React.createElement("div", { className: "ui-selection" }, !this.state.label
                                ? React.createElement("i", null, "Click on residue or channel")
                                : this.state.label));
                    };
                    return Selection;
                }(React.Component));
                UI.Selection = Selection;
                var Section = (function (_super) {
                    __extends(Section, _super);
                    function Section() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.state = { isExpanded: false };
                        return _this;
                    }
                    Section.prototype.toggle = function (e) {
                        e.preventDefault();
                        this.setState({ isExpanded: !this.state.isExpanded });
                    };
                    Section.prototype.render = function () {
                        var _this = this;
                        return React.createElement("div", { className: "ui-item-container", style: { position: 'relative' } },
                            React.createElement("div", { className: "ui-subheader" },
                                React.createElement("a", { href: '#', onClick: function (e) { return _this.toggle(e); }, className: 'section-header' },
                                    React.createElement("div", { style: { width: '15px', display: 'inline-block', textAlign: 'center' } }, this.state.isExpanded ? '-' : '+'),
                                    " ",
                                    this.props.header,
                                    " (",
                                    this.props.count,
                                    ")")),
                            React.createElement("div", { style: { display: this.state.isExpanded ? 'block' : 'none' } }, this.props.children));
                    };
                    return Section;
                }(React.Component));
                UI.Section = Section;
                var Renderable = (function (_super) {
                    __extends(Renderable, _super);
                    function Renderable() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.state = { isAnnotationsVisible: false };
                        return _this;
                    }
                    Renderable.prototype.toggle = function () {
                        var _this = this;
                        this.props.element.__isBusy = true;
                        this.forceUpdate(function () {
                            return _this.props.toggle(_this.props.plugin, [_this.props.element], !_this.props.element.__isVisible)
                                .then(function () { return _this.forceUpdate(); }).catch(function () { return _this.forceUpdate(); });
                        });
                    };
                    Renderable.prototype.highlight = function (isOn) {
                        this.props.plugin.command(LiteMol.Bootstrap.Command.Entity.Highlight, { entities: this.props.plugin.context.select(this.props.element.__id), isOn: isOn });
                    };
                    Renderable.prototype.toggleAnnotations = function (e) {
                        this.setState({ isAnnotationsVisible: !this.state.isAnnotationsVisible });
                    };
                    Renderable.prototype.getAnnotationToggler = function () {
                        return [(this.state.isAnnotationsVisible)
                                ? React.createElement("span", { className: "hand glyphicon glyphicon-chevron-up", title: "Hide list annotations for this channel", onClick: this.toggleAnnotations.bind(this) })
                                : React.createElement("span", { className: "hand glyphicon glyphicon-chevron-down", title: "Show all annotations available for this channel", onClick: this.toggleAnnotations.bind(this) })];
                    };
                    Renderable.prototype.getAnnotationsElements = function () {
                        if (this.props.annotations === void 0) {
                            return [];
                        }
                        if (!this.state.isAnnotationsVisible) {
                            return [];
                        }
                        var elements = [];
                        for (var _i = 0, _a = this.props.annotations; _i < _a.length; _i++) {
                            var annotation = _a[_i];
                            var reference = React.createElement("i", null, "(No reference provided)");
                            if (annotation.reference !== "") {
                                reference = React.createElement("a", { target: "_blank", href: annotation.link },
                                    annotation.reference,
                                    " ",
                                    React.createElement("span", { className: "glyphicon glyphicon-new-window" }));
                            }
                            elements.push(React.createElement("div", { className: "annotation-line" },
                                React.createElement("span", { className: "bullet" }),
                                " ",
                                React.createElement("b", null, annotation.text),
                                ", ",
                                reference));
                        }
                        return elements;
                    };
                    Renderable.prototype.render = function () {
                        var _this = this;
                        var emptyToggler = React.createElement("span", { className: "disabled glyphicon glyphicon-chevron-down", title: "No annotations available for this channel", onClick: this.toggleAnnotations.bind(this) });
                        return React.createElement("div", { className: "ui-label" },
                            React.createElement("input", { type: 'checkbox', checked: !!this.props.element.__isVisible, onChange: function () { return _this.toggle(); }, disabled: !!this.props.element.__isBusy }),
                            React.createElement("label", { className: "ui-label-element", onMouseEnter: function () { return _this.highlight(true); }, onMouseLeave: function () { return _this.highlight(false); } },
                                (this.props.annotations !== void 0 && this.props.annotations.length > 0) ? this.getAnnotationToggler() : emptyToggler,
                                " ",
                                this.props.label),
                            this.getAnnotationsElements());
                    };
                    return Renderable;
                }(React.Component));
                UI.Renderable = Renderable;
                var Channels = (function (_super) {
                    __extends(Channels, _super);
                    function Channels() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.state = { isBusy: false };
                        return _this;
                    }
                    Channels.prototype.show = function (visible) {
                        var _this = this;
                        for (var _i = 0, _a = this.props.channels; _i < _a.length; _i++) {
                            var element = _a[_i];
                            element.__isBusy = true;
                        }
                        this.setState({ isBusy: true }, function () {
                            return Channels_1.State.showChannelVisuals(_this.props.state.plugin, _this.props.channels, visible)
                                .then(function () { return _this.setState({ isBusy: false }); }).catch(function () { return _this.setState({ isBusy: false }); });
                        });
                    };
                    Channels.prototype.isDisabled = function () {
                        return !this.props.channels || (this.props.channels !== void 0 && this.props.channels.length == 0);
                    };
                    Channels.prototype.render = function () {
                        var _this = this;
                        return React.createElement(Section, { header: this.props.header, count: (this.props.channels || '').length },
                            React.createElement("div", { className: 'ui-show-all' },
                                React.createElement("button", { className: "btn btn-primary btn-xs bt-all", onClick: function () { return _this.show(true); }, disabled: this.state.isBusy || this.isDisabled() }, "All"),
                                React.createElement("button", { className: "btn btn-primary btn-xs bt-none", onClick: function () { return _this.show(false); }, disabled: this.state.isBusy || this.isDisabled() }, "None")),
                            this.props.channels && this.props.channels.length > 0
                                ? this.props.channels.map(function (c, i) { return React.createElement(Channel, { key: i, channel: c, state: _this.props.state }); })
                                : React.createElement("div", { className: "ui-label ui-no-data-available" }, "No data available..."));
                    };
                    return Channels;
                }(React.Component));
                UI.Channels = Channels;
                var Channel = (function (_super) {
                    __extends(Channel, _super);
                    function Channel() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.state = { isVisible: false, isWaitingForData: false };
                        return _this;
                    }
                    Channel.prototype.componentDidMount = function () {
                        var _this = this;
                        Bridge.Events.subscribeChannelSelect((function (channelId) {
                            if (_this.props.channel.Id === channelId) {
                                _this.selectChannel();
                            }
                        }).bind(this));
                    };
                    Channel.prototype.dataWaitHandler = function () {
                        var state = this.state;
                        state.isWaitingForData = false;
                        this.setState(state);
                    };
                    Channel.prototype.invokeDataWait = function () {
                        if (this.state.isWaitingForData) {
                            return;
                        }
                        var state = this.state;
                        state.isWaitingForData = true;
                        this.setState(state);
                        Annotation.AnnotationDataProvider.subscribeForData(this.dataWaitHandler.bind(this));
                    };
                    Channel.prototype.render = function () {
                        var c = this.props.channel;
                        var len = CommonUtils.Tunnels.getLength(c);
                        var annotations = Annotation.AnnotationDataProvider.getChannelAnnotations(c.Id);
                        if (annotations === void 0) {
                            this.invokeDataWait();
                        }
                        if (annotations !== null && annotations !== void 0) {
                            var annotation = annotations[0];
                            return React.createElement(Renderable, __assign({ annotations: annotations, label: React.createElement("span", null,
                                    React.createElement("b", null,
                                        React.createElement("a", { onClick: this.selectChannel.bind(this) }, annotation.text)),
                                    ", Length: ",
                                    len,
                                    " \u00C5"), element: c, toggle: Channels_1.State.showChannelVisuals }, this.props.state));
                        }
                        else {
                            return React.createElement(Renderable, __assign({ label: React.createElement("span", null,
                                    React.createElement("b", null,
                                        React.createElement("a", { onClick: this.selectChannel.bind(this) }, c.Type)),
                                    ", ", "Length: " + len + " \u00C5"), element: c, toggle: Channels_1.State.showChannelVisuals }, this.props.state));
                        }
                    };
                    Channel.prototype.selectChannel = function () {
                        var _this = this;
                        var entity = this.props.state.plugin.context.select(this.props.channel.__id)[0];
                        if (entity === void 0 || entity.ref === "undefined") {
                            Channels_1.State.showChannelVisuals(this.props.state.plugin, [this.props.channel], true);
                            var state = this.state;
                            state.isVisible = true;
                            this.setState(state);
                            window.setTimeout((function () {
                                _this.selectChannel();
                            }).bind(this), 50);
                            return;
                        }
                        var channelRef = entity.ref;
                        var plugin = this.props.state.plugin;
                        plugin.command(LiteMol.Bootstrap.Command.Entity.Focus, plugin.context.select(channelRef));
                        plugin.command(LiteMol.Bootstrap.Event.Visual.VisualSelectElement, LiteMol.Bootstrap.Interactivity.Info.selection(entity, [0]));
                    };
                    return Channel;
                }(React.Component));
                UI.Channel = Channel;
                var Cavities = (function (_super) {
                    __extends(Cavities, _super);
                    function Cavities() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.state = { isBusy: false };
                        return _this;
                    }
                    Cavities.prototype.show = function (visible) {
                        var _this = this;
                        for (var _i = 0, _a = this.props.cavities; _i < _a.length; _i++) {
                            var element = _a[_i];
                            element.__isBusy = true;
                        }
                        this.setState({ isBusy: true }, function () {
                            return Channels_1.State.showCavityVisuals(_this.props.state.plugin, _this.props.cavities, visible)
                                .then(function () { return _this.setState({ isBusy: false }); }).catch(function () { return _this.setState({ isBusy: false }); });
                        });
                    };
                    Cavities.prototype.isDisabled = function () {
                        return !this.props.cavities || (this.props.cavities !== void 0 && this.props.cavities.length == 0);
                    };
                    Cavities.prototype.render = function () {
                        var _this = this;
                        return React.createElement(Section, { header: this.props.header, count: (this.props.cavities || '').length },
                            React.createElement("div", { className: 'ui-show-all' },
                                React.createElement("button", { className: "btn btn-primary btn-xs", onClick: function () { return _this.show(true); }, disabled: this.state.isBusy || this.isDisabled() }, "All"),
                                React.createElement("button", { className: "btn btn-primary btn-xs", onClick: function () { return _this.show(false); }, disabled: this.state.isBusy || this.isDisabled() }, "None")),
                            this.props.cavities && this.props.cavities.length > 0
                                ? this.props.cavities.map(function (c, i) { return React.createElement(Cavity, { key: i, cavity: c, state: _this.props.state }); })
                                : React.createElement("div", { className: "ui-label ui-no-data-available" }, "No data available..."));
                    };
                    return Cavities;
                }(React.Component));
                UI.Cavities = Cavities;
                var Cavity = (function (_super) {
                    __extends(Cavity, _super);
                    function Cavity() {
                        var _this = _super !== null && _super.apply(this, arguments) || this;
                        _this.state = { isVisible: false };
                        return _this;
                    }
                    Cavity.prototype.render = function () {
                        var c = this.props.cavity;
                        return React.createElement("div", null,
                            React.createElement(Renderable, __assign({ label: React.createElement("span", null,
                                    React.createElement("b", null, c.Id),
                                    ", ", "Volume: " + (c.Volume | 0) + " \u00C5",
                                    React.createElement("sup", null, "3")), element: c, toggle: Channels_1.State.showCavityVisuals }, this.props.state)));
                    };
                    return Cavity;
                }(React.Component));
                UI.Cavity = Cavity;
                var Origins = (function (_super) {
                    __extends(Origins, _super);
                    function Origins() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    Origins.prototype.toggle = function () {
                        var _this = this;
                        this.props.origins.__isBusy = true;
                        this.forceUpdate(function () {
                            return Channels_1.State.showOriginsSurface(_this.props.plugin, _this.props.origins, !_this.props.origins.__isVisible)
                                .then(function () { return _this.forceUpdate(); }).catch(function () { return _this.forceUpdate(); });
                        });
                    };
                    Origins.prototype.highlight = function (isOn) {
                        this.props.plugin.command(LiteMol.Bootstrap.Command.Entity.Highlight, { entities: this.props.plugin.context.select(this.props.origins.__id), isOn: isOn });
                    };
                    Origins.prototype.render = function () {
                        var _this = this;
                        if (!this.props.origins.Points.length) {
                            return React.createElement("div", { style: { display: 'none' } });
                        }
                        return React.createElement("div", null,
                            React.createElement("label", { onMouseEnter: function () { return _this.highlight(true); }, onMouseLeave: function () { return _this.highlight(false); } },
                                React.createElement("input", { type: 'checkbox', checked: !!this.props.origins.__isVisible, onChange: function () { return _this.toggle(); }, disabled: !!this.props.origins.__isBusy }),
                                " ",
                                this.props.label));
                    };
                    return Origins;
                }(React.Component));
                UI.Origins = Origins;
            })(UI = Channels_1.UI || (Channels_1.UI = {}));
        })(Channels = Example.Channels || (Example.Channels = {}));
    })(Example = LiteMol.Example || (LiteMol.Example = {}));
})(LiteMol || (LiteMol = {}));
/*
 * Copyright (c) 2016 - now David Sehnal, licensed under Apache 2.0, See LICENSE file for more info.
 */
var LiteMol;
/*
 * Copyright (c) 2016 - now David Sehnal, licensed under Apache 2.0, See LICENSE file for more info.
 */
(function (LiteMol) {
    var Example;
    (function (Example) {
        var Channels;
        (function (Channels) {
            /**
             * We don't want the default behaviour of the plugin for our example.
             */
            var Views = LiteMol.Plugin.Views;
            var Bootstrap = LiteMol.Bootstrap;
            var Interactivity = Bootstrap.Interactivity;
            var Transformer = Bootstrap.Entity.Transformer;
            var LayoutRegion = Bootstrap.Components.LayoutRegion;
            /**
             * Support for custom highlight tooltips.
             */
            function HighlightCustomElements(context) {
                context.highlight.addProvider(function (info) {
                    if (Interactivity.isEmpty(info) || info.source.type !== Bootstrap.Entity.Visual.Surface)
                        return void 0;
                    var tag = info.source.props.tag;
                    var e = tag.element;
                    switch (tag.type) {
                        case 'Cavity': return "<b>" + e.Type + " " + e.Id + "</b>, Volume: " + (e.Volume | 0) + " \u00C5";
                        case 'Path':
                        case 'Pore':
                        case 'MergedPore':
                        case 'Tunnel': {
                            var tunnel = e;
                            var len = CommonUtils.Tunnels.getLength(tunnel);
                            var bneck = CommonUtils.Tunnels.getBottleneck(tunnel);
                            var annotation = Annotation.AnnotationDataProvider.getChannelAnnotation(tunnel.Id);
                            if (annotation === null || annotation === void 0) {
                                return "<b>" + tunnel.Type + "</b>, Length: " + len + " \u00C5 | Bottleneck: " + bneck + " \u00C5";
                            }
                            else {
                                return "<b>" + annotation.text + "</b>, Length: " + len + " \u00C5 | Bottleneck: " + bneck + " \u00C5";
                            }
                        }
                        case 'Origins': {
                            var o = e.Points[info.elements[0]];
                            return "<b>Origin</b> (" + e.Type + ") at (" + o.X + ", " + o.Y + ", " + o.Z + ")";
                        }
                        default: return void 0;
                    }
                });
            }
            Channels.HighlightCustomElements = HighlightCustomElements;
            Channels.PluginSpec = {
                settings: {
                    'molecule.model.defaultQuery': "residuesByName('GLY', 'ALA')",
                    'molecule.model.defaultAssemblyName': '1'
                },
                transforms: [
                    // Molecule(model) transforms
                    { transformer: Transformer.Molecule.CreateModel, view: Views.Transform.Molecule.CreateModel, initiallyCollapsed: true },
                    { transformer: Transformer.Molecule.CreateSelection, view: Views.Transform.Molecule.CreateSelection, initiallyCollapsed: true },
                    { transformer: Transformer.Molecule.CreateAssembly, view: Views.Transform.Molecule.CreateAssembly, initiallyCollapsed: true },
                    { transformer: Transformer.Molecule.CreateSymmetryMates, view: Views.Transform.Molecule.CreateSymmetryMates, initiallyCollapsed: true },
                    { transformer: Transformer.Molecule.CreateMacromoleculeVisual, view: Views.Transform.Empty },
                    { transformer: Transformer.Molecule.CreateVisual, view: Views.Transform.Molecule.CreateVisual }
                ],
                behaviours: [
                    // you will find the source of all behaviours in the Bootstrap/Behaviour directory
                    Bootstrap.Behaviour.SetEntityToCurrentWhenAdded,
                    Bootstrap.Behaviour.FocusCameraOnSelect,
                    // this colors the visual when a selection is created on it.
                    Bootstrap.Behaviour.ApplySelectionToVisual,
                    // this colors the visual when it's selected by mouse or touch
                    Bootstrap.Behaviour.ApplyInteractivitySelection,
                    // this shows what atom/residue is the pointer currently over
                    Bootstrap.Behaviour.Molecule.HighlightElementInfo,
                    // when the same element is clicked twice in a row, the selection is emptied
                    //Bootstrap.Behaviour.UnselectElementOnRepeatedClick,
                    // distance to the last "clicked" element
                    Bootstrap.Behaviour.Molecule.DistanceToLastClickedElement,
                    // this tracks what is downloaded and some basic actions. Does not send any private data etc. Source in Bootstrap/Behaviour/Analytics 
                    Bootstrap.Behaviour.GoogleAnalytics('UA-77062725-1'),
                    HighlightCustomElements
                ],
                components: [
                    LiteMol.Plugin.Components.Visualization.HighlightInfo(LayoutRegion.Main, true),
                    LiteMol.Plugin.Components.Entity.Current('LiteMol', LiteMol.Plugin.VERSION.number)(LayoutRegion.Right, true),
                    LiteMol.Plugin.Components.Transform.View(LayoutRegion.Right),
                    LiteMol.Plugin.Components.Context.Log(LayoutRegion.Bottom, true),
                    LiteMol.Plugin.Components.Context.Overlay(LayoutRegion.Root),
                    LiteMol.Plugin.Components.Context.Toast(LayoutRegion.Main, true),
                    LiteMol.Plugin.Components.Context.BackgroundTasks(LayoutRegion.Main, true)
                ],
                viewport: {
                    view: Views.Visualization.Viewport,
                    controlsView: Views.Visualization.ViewportControls
                },
                layoutView: Views.Layout,
                tree: {
                    region: LayoutRegion.Left,
                    view: Views.Entity.Tree
                }
            };
        })(Channels = Example.Channels || (Example.Channels = {}));
    })(Example = LiteMol.Example || (LiteMol.Example = {}));
})(LiteMol || (LiteMol = {}));
/*
 * Copyright (c) 2016 - now David Sehnal, licensed under Apache 2.0, See LICENSE file for more info.
 */
var LiteMol;
/*
 * Copyright (c) 2016 - now David Sehnal, licensed under Apache 2.0, See LICENSE file for more info.
 */
(function (LiteMol) {
    var Example;
    (function (Example) {
        var Channels;
        (function (Channels) {
            // all commands and events can be found in Bootstrap/Event folder.
            // easy to follow the types and parameters in VSCode.
            var Vizualizer = LayersVizualizer;
            (function () {
                var ROUTING_OPTIONS = {
                    "local": { defaultContextPath: "/ChannelsDB", defaultPid: "5an8", useParameterAsPid: true },
                    "chdb-test": { defaultContextPath: "/ChannelsDB/detail", defaultPid: "5an8", useLastPathPartAsPid: true },
                    "test": { defaultContextPath: "/test/detail", defaultPid: "5an8", useLastPathPartAsPid: true },
                    "chdb-prod": { defaultContextPath: "/ChannelsDB/detail", defaultPid: "5an8", useLastPathPartAsPid: true },
                };
                var ROUTING_MODE = "chdb-prod";
                var lvSettings = {
                    coloringProperty: "Hydropathy",
                    useColorMinMax: true,
                    skipMiddleColor: false,
                    topMargin: 0,
                    customRadiusProperty: "MinRadius"
                };
                SimpleRouter.GlobalRouter.init(ROUTING_OPTIONS[ROUTING_MODE]);
                //Create instance of layer vizualizer
                var layerVizualizer = new LayersVizualizer.Vizualizer('layer-vizualizer-ui', lvSettings);
                var plugin = LiteMol.Plugin.create({
                    target: '#plugin',
                    viewportBackground: '#000',
                    layoutState: {
                        hideControls: true,
                        isExpanded: false,
                        collapsedControlsLayout: LiteMol.Bootstrap.Components.CollapsedControlsLayout.Landscape
                    },
                    customSpecification: Channels.PluginSpec
                });
                CommonUtils.Selection.SelectionHelper.attachClearSelectionToEventHandler(plugin);
                Channels.UI.render(plugin, document.getElementById('ui'));
                Vizualizer.UI.render(layerVizualizer, document.getElementById('layer-vizualizer-ui'), plugin);
                AglomeredParameters.UI.render(document.getElementById('left-tabs-2'), plugin);
                ChannelsDescriptions.UI.render(document.getElementById('left-tabs-3'), plugin);
                //LayerProperties.UI.render(document.getElementById("right-tabs-1") !, plugin);
                LayerProperties.UI.render(document.getElementById("layer-properties"), plugin);
                //LayerResidues.UI.render(document.getElementById("right-tabs-2") !, plugin);
                LayerResidues.UI.render(document.getElementById("layer-residues"), plugin);
                LiningResidues.UI.render(document.getElementById("right-tabs-2"), plugin);
                ResidueAnnotations.UI.render(document.getElementById("right-tabs-3"), plugin);
                ProteinAnnotations.UI.render(document.getElementById("right-panel-tabs-1"), plugin);
                DownloadReport.UI.render(document.getElementById("download-report"));
                PdbIdSign.UI.render(document.getElementById("pdbid-sign"));
            })();
        })(Channels = Example.Channels || (Example.Channels = {}));
    })(Example = LiteMol.Example || (LiteMol.Example = {}));
})(LiteMol || (LiteMol = {}));
