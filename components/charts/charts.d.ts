import { OnDestroy, OnInit, OnChanges, EventEmitter, ElementRef } from '@angular/core';
export declare class ChartsComponent {
}
export declare class BaseChartComponent implements OnDestroy, OnChanges, OnInit {
    data: Array<any>;
    labels: Array<any>;
    options: any;
    chartType: string;
    series: Array<any>;
    colours: Array<any>;
    legend: boolean;
    chartClick: EventEmitter<any>;
    chartHover: EventEmitter<any>;
    private ctx;
    private cvs;
    private parent;
    private chart;
    private legendTemplate;
    private initFlag;
    private defaultsColours;
    private element;
    constructor(element: ElementRef);
    ngOnInit(): any;
    ngOnChanges(): any;
    ngOnDestroy(): any;
    setLegend(): void;
    getColour(colour: Array<number>): any;
    getRandomInt(min: number, max: number): number;
    rgba(colour: Array<number>, alpha: number): string;
    click(evt: any): void;
    hover(evt: any): void;
    getChartBuilder(ctx: any, data: Array<any>, options: any): any;
    getDataObject(label: string, value: any): any;
    getChartData(labels: any, dataObject: any): any;
    private refresh();
}
export declare const CHART_DIRECTIVES: Array<any>;
