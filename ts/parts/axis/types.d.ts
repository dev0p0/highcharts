/* *
 *
 *  (c) 2010-2020 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */

import type Axis from '../Axis';
import type BrokenAxis from '../../modules/broken-axis.src';
import type DateTimeAxis from '../DateTimeAxis';
import type HiddenAxis from '../../parts-more/HiddenAxis';
import type LogarithmicAxis from '../LogarithmicAxis';
import type MapAxis from '../../parts-map/MapAxis';
import type NavigatorAxis from '../NavigatorAxis';
import type OrdinalAxis from '../OrdinalAxis';
import type ParallelAxis from '../../modules/parallel-coordinates.src';
import type RadialAxis from '../../parts-more/RadialAxis';
import type ScrollbarAxis from '../ScrollbarAxis';

export interface AxisBreakBorderObject {
    move: string;
    size?: number;
    value: number;
}

export interface AxisBreakObject {
    from: number;
    len: number;
    to: number;
}

export interface AxisComposition {
    brokenAxis?: BrokenAxis['brokenAxis'];
    dateTime?: DateTimeAxis['dateTime'];
    logarithmic?: LogarithmicAxis['logarithmic'];
    navigatorAxis?: NavigatorAxis['navigatorAxis'];
    mapAxis?: MapAxis['mapAxis'];
    ordinal?: OrdinalAxis['ordinal'];
    parallel?: ParallelAxis['parallel'];
    scrollbar?: ScrollbarAxis['scrollbar'];
}

/**
 * All possible axis types.
 */
export type AxisType = (
    Axis|
    BrokenAxis|
    HiddenAxis|
    LogarithmicAxis|
    MapAxis|
    NavigatorAxis|
    OrdinalAxis|
    ParallelAxis|
    RadialAxis|
    ScrollbarAxis
);
