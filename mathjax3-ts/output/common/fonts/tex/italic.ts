/*************************************************************
 *
 *  Copyright (c) 2018 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import {CharMap} from '../../FontData.js';

export const italic: CharMap = {
    0x20: [0, 0, .25],
    0x21: [.716, 0, .307, {ic: .073}],
    0x22: [.694, -0.379, .514],
    0x23: [.694, .194, .818],
    0x25: [.75, .056, .818],
    0x26: [.716, .022, .767],
    0x27: [.694, -0.379, .307, {ic: .07}],
    0x28: [.75, .25, .409, {ic: .108}],
    0x29: [.75, .25, .409],
    0x2A: [.75, -0.32, .511, {ic: .073}],
    0x2B: [.557, .057, .767],
    0x2C: [.121, .194, .307],
    0x2D: [.251, -0.18, .358],
    0x2E: [.121, 0, .307],
    0x2F: [.716, .215, .778],
    0x30: [.665, .021, .511, {ic: .051}],
    0x31: [.666, 0, .511],
    0x32: [.666, .022, .511],
    0x33: [.666, .022, .511, {ic: .051}],
    0x34: [.666, .194, .511],
    0x35: [.666, .022, .511, {ic: .056}],
    0x36: [.665, .022, .511, {ic: .054}],
    0x37: [.666, .022, .511, {ic: .123}],
    0x38: [.666, .021, .511],
    0x39: [.666, .022, .511],
    0x3A: [.431, 0, .307],
    0x3B: [.431, .194, .307],
    0x3D: [.367, -0.133, .767],
    0x3F: [.716, 0, .511],
    0x40: [.705, .011, .767],
    0x41: [.716, 0, .75, {sk: 0.139}],
    0x42: [.683, 0, .759, {sk: 0.0833}],
    0x43: [.705, .022, .715, {sk: 0.0833}],
    0x44: [.683, 0, .828, {sk: 0.0556}],
    0x45: [.68, 0, .738, {sk: 0.0833}],
    0x46: [.68, 0, .643, {ic: .106, sk: 0.0833}],
    0x47: [.705, .022, .786, {sk: 0.0833}],
    0x48: [.683, 0, .831, {ic: .057, sk: 0.0556}],
    0x49: [.683, 0, .44, {ic: .064, sk: 0.111}],
    0x4A: [.683, .022, .555, {ic: .078, sk: 0.167}],
    0x4B: [.683, 0, .849, {sk: 0.0556}],
    0x4C: [.683, 0, .681, {sk: 0.0278}],
    0x4D: [.683, 0, .97, {ic: .081, sk: 0.0833}],
    0x4E: [.683, 0, .803, {ic: .085, sk: 0.0833}],
    0x4F: [.704, .022, .763, {sk: 0.0833}],
    0x50: [.683, 0, .642, {ic: .109, sk: 0.0833}],
    0x51: [.704, .194, .791, {sk: 0.0833}],
    0x52: [.683, .021, .759, {sk: 0.0833}],
    0x53: [.705, .022, .613, {sk: 0.0833}],
    0x54: [.677, 0, .584, {ic: .12, sk: 0.0833}],
    0x55: [.683, .022, .683, {ic: .084, sk: 0.0278}],
    0x56: [.683, .022, .583, {ic: .186}],
    0x57: [.683, .022, .944, {ic: .104}],
    0x58: [.683, 0, .828, {sk: 0.0833}],
    0x59: [.683, 0, .581, {ic: .182}],
    0x5A: [.683, 0, .683, {sk: 0.0833}],
    0x5B: [.75, .25, .307, {ic: .139}],
    0x5D: [.75, .25, .307, {ic: .052}],
    0x5E: [.694, -0.527, .511],
    0x5F: [-0.025, .062, .511],
    0x61: [.441, .01, .529],
    0x62: [.694, .011, .429],
    0x63: [.442, .011, .433, {sk: 0.0556}],
    0x64: [.694, .01, .52, {sk: 0.167}],
    0x65: [.442, .011, .466, {sk: 0.0556}],
    0x66: [.705, .205, .49, {ic: .06, sk: 0.167}],
    0x67: [.442, .205, .477, {sk: 0.0278}],
    0x68: [.694, .011, .576, {sk: -0.0278}],
    0x69: [.661, .011, .345],
    0x6A: [.661, .204, .412],
    0x6B: [.694, .011, .521],
    0x6C: [.694, .011, .298, {sk: 0.0833}],
    0x6D: [.442, .011, .878],
    0x6E: [.442, .011, .6],
    0x6F: [.441, .011, .485, {sk: 0.0556}],
    0x70: [.442, .194, .503, {sk: 0.0833}],
    0x71: [.442, .194, .446, {sk: 0.0833}],
    0x72: [.442, .011, .451, {sk: 0.0556}],
    0x73: [.442, .01, .469, {sk: 0.0556}],
    0x74: [.626, .011, .361, {sk: 0.0833}],
    0x75: [.442, .011, .572, {sk: 0.0278}],
    0x76: [.443, .011, .485, {sk: 0.0278}],
    0x77: [.443, .011, .716, {sk: 0.0833}],
    0x78: [.442, .011, .572, {sk: 0.0278}],
    0x79: [.442, .205, .49, {sk: 0.0556}],
    0x7A: [.442, .011, .465, {sk: 0.0556}],
    0x7E: [.318, -0.208, .511, {ic: .06}],
    0xA0: [0, 0, .25],
    0xA3: [.714, .011, .769],
    0x131: [.441, .01, .307],
    0x237: [.442, .204, .332],
    0x300: [.697, -0.5, 0],
    0x301: [.697, -0.5, 0],
    0x302: [.694, -0.527, 0],
    0x303: [.668, -0.558, 0, {ic: .06}],
    0x304: [.589, -0.544, 0, {ic: .054}],
    0x306: [.694, -0.515, 0, {ic: .062}],
    0x307: [.669, -0.548, 0],
    0x308: [.669, -0.554, 0],
    0x30A: [.716, -0.542, 0],
    0x30B: [.697, -0.503, 0, {ic: .065}],
    0x30C: [.638, -0.502, 0],
    0x391: [.716, 0, .75, {sk: 0.139}],
    0x392: [.683, 0, .759, {sk: 0.0833}],
    0x393: [.68, 0, .615, {ic: .106, sk: 0.0833}],
    0x394: [.716, 0, .833, {sk: 0.167}],
    0x395: [.68, 0, .738, {sk: 0.0833}],
    0x396: [.683, 0, .683, {sk: 0.0833}],
    0x397: [.683, 0, .831, {ic: .057, sk: 0.0556}],
    0x398: [.704, .022, .763, {sk: 0.0833}],
    0x399: [.683, 0, .44, {ic: .064, sk: 0.111}],
    0x39A: [.683, 0, .849, {sk: 0.0556}],
    0x39B: [.716, 0, .694, {sk: 0.167}],
    0x39C: [.683, 0, .97, {ic: .081, sk: 0.0833}],
    0x39D: [.683, 0, .803, {ic: .085, sk: 0.0833}],
    0x39E: [.677, 0, .742, {sk: 0.0833}],
    0x39F: [.704, .022, .763, {sk: 0.0833}],
    0x3A0: [.68, 0, .831, {ic: .056, sk: 0.0556}],
    0x3A1: [.683, 0, .642, {ic: .109, sk: 0.0833}],
    0x3A2: [.704, .022, .763, {sk: 0.0833}],
    0x3A3: [.683, 0, .78, {sk: 0.0833}],
    0x3A4: [.677, 0, .584, {ic: .12, sk: 0.0833}],
    0x3A5: [.705, 0, .583, {ic: .117, sk: 0.0556}],
    0x3A6: [.683, 0, .667, {sk: 0.0833}],
    0x3A7: [.683, 0, .828, {sk: 0.0833}],
    0x3A8: [.683, 0, .612, {ic: .08, sk: 0.0556}],
    0x3A9: [.704, 0, .772, {sk: 0.0833}],
    0x3B1: [.442, .011, .64, {sk: 0.0278}],
    0x3B2: [.705, .194, .566, {sk: 0.0833}],
    0x3B3: [.441, .216, .518],
    0x3B4: [.717, .01, .444, {sk: 0.0556}],
    0x3B5: [.452, .022, .466, {sk: 0.0833}],
    0x3B6: [.704, .204, .438, {sk: 0.0833}],
    0x3B7: [.442, .216, .497, {sk: 0.0556}],
    0x3B8: [.705, .01, .469, {sk: 0.0833}],
    0x3B9: [.442, .01, .354, {sk: 0.0556}],
    0x3BA: [.442, .011, .576],
    0x3BB: [.694, .012, .583],
    0x3BC: [.442, .216, .603, {sk: 0.0278}],
    0x3BD: [.442, 0, .494, {sk: 0.0278}],
    0x3BE: [.704, .205, .438, {sk: 0.111}],
    0x3BF: [.441, .011, .485, {sk: 0.0556}],
    0x3C0: [.431, .011, .57],
    0x3C1: [.442, .216, .517, {sk: 0.0833}],
    0x3C2: [.442, .107, .363, {sk: 0.0833}],
    0x3C3: [.431, .011, .571],
    0x3C4: [.431, .013, .437, {ic: .08, sk: 0.0278}],
    0x3C5: [.443, .01, .54, {sk: 0.0278}],
    0x3C6: [.442, .218, .654, {sk: 0.0833}],
    0x3C7: [.442, .204, .626, {sk: 0.0556}],
    0x3C8: [.694, .205, .651, {sk: 0.111}],
    0x3C9: [.443, .011, .622],
    0x3D1: [.705, .011, .591, {sk: 0.0833}],
    0x3D2: [.705, 0, .583, {ic: .117, sk: 0.0556}],
    0x3D5: [.694, .205, .596, {sk: 0.0833}],
    0x3D6: [.431, .01, .828],
    0x3DC: [.68, 0, .643, {ic: .106, sk: 0.0833}],
    0x3F1: [.442, .194, .517, {sk: 0.0833}],
    0x3F5: [.431, .011, .406, {sk: 0.0556}],
    0x2013: [.285, -0.248, .511],
    0x2014: [.285, -0.248, 1.022],
    0x2015: [.285, -0.248, 1.022],
    0x2017: [-0.025, .062, .511],
    0x2018: [.694, -0.379, .307, {ic: .055}],
    0x2019: [.694, -0.379, .307, {ic: .07}],
    0x201C: [.694, -0.379, .514, {ic: .092}],
    0x201D: [.694, -0.379, .514],
    0x2044: [.716, .215, .778],
    0x210E: [.694, .011, .576, {sk: -0.0278}],
    0x210F: [.695, .013, .54],
    0x2206: [.716, 0, .833, {sk: 0.167}],
    0x29F8: [.716, .215, .778],
};
