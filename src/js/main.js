(this.webpackJsonpportfolio = this.webpackJsonpportfolio || []).push([
    [0], {
        130: function(e, a, t) {
            var n = {
                "./linksfoundation.png": 539,
                "./politecnicoditorino.png": 540
            };

            function r(e) {
                var a = c(e);
                return t(a)
            }

            function c(e) {
                if (!t.o(n, e)) {
                    var a = new Error("Cannot find module '" + e + "'");
                    throw a.code = "MODULE_NOT_FOUND", a
                }
                return n[e]
            }
            r.keys = function() {
                return Object.keys(n)
            }, r.resolve = c, e.exports = r, r.id = 130
        },
        134: function(e, a) {
            e.exports = {
                particles: {
                    particles: {
                        number: {
                            value: 20
                        },
                        color: {
                            value: ["#0be779", "#008a3e", "#a3ffce"] //COLORI PALLINI DIETRO "#0be779", "#008a3e", "#a3ffce"
                        },
                        opacity: {
                            value: .5,
                            random: !1,
                            anim: {
                                enable: !0,
                                speed: .2,
                                opacity_min: .3,
                                sync: !0
                            }
                        },
                        size: {
                            value: 50,
                            random: !0
                        },
                        line_linked: {
                            enable: !0,
                            distance: 450,
                            color: "#ffffff",
                            opacity: .1,
                            width: 1
                        },
                        move: {
                            enable: !0,
                            speed: 1,
                            direction: "none",
                            random: !0,
                            straight: !1,
                            bounce: !0
                        }
                    },
                    interactivity: {
                        detect_on: "canvas",
                        events: {
                            onhover: {
                                enable: !0,
                                mode: ["bubble"]
                            },
                            resize: !0
                        },
                        modes: {
                            bubble: {
                                distance: 200,
                                size: 20,
                                duration: 1,
                                opacity: .8,
                                speed: 2
                            }
                        }
                    },
                    retina_detect: !0
                }
            }
        },
        135: function(e, a, t) {
            e.exports = t.p + "src/media/matteo.png"
        },
        138: function(e) {
            e.exports = JSON.parse('{"a":[{"id":0,"skillName":"Python","amount":"85"},{"id":1,"skillName":"Pytorch","amount":"80"},{"id":2,"skillName":"ML libraries","amount":"80"},{"id":3,"skillName":"TensorFlow","amount":"75"},{"id":4,"skillName":"C","amount":"75"},{"id":5,"skillName":"SQL / NoSQL","amount":"65"},{"id":6,"skillName":"C++","amount":"65"},{"id":7,"skillName":"Java","amount":"65"},{"id":8,"skillName":"C#","amount":"55"},{"id":9,"skillName":"PySpark","amount":"45"},{"id":10,"skillName":"Hadoop","amount":"45"},{"id":11,"skillName":"JavaScript","amount":"35"},{"id":12,"skillName":"HTML","amount":"35"}]}')
        },
        139: function(e) {
            e.exports = JSON.parse('{"experience":[{"id":0,"link":"https://github.com/MatteoM95/Skymap-path-planner","company":"Politecnico di Torino","title":"Skymap path planner","dateFrom":"September 2018","dateTo":"July 2019","info":["Retrieved and analyzed meteorological data in the GRIB2 format from NOAA for a specified area of interest.","Attempted to determine the optimal flight route through clouds using pathfinding algorithms such as Dijkstra and A*, implemented in C++, Java, and C#."],"stack":["C++","C#","Path Planning","GRIB"],"logoheight":80,"colourPrimary":"linear-gradient(to bottom, #465a90, #1e3470)","colourSecondary":"linear-gradient(to bottom, #465a90, #1e3470)","pathImage":"src/media/background/flight.png"},{"id":1,"link":"https://github.com/MatteoM95/Twitter-Sentiment-Analisys","company":"Politecnico di Torino","title":"Twitter Sentiment Analisys","dateFrom":"January 2022","dateTo":"February 2022","info":["In this project is proposed a study on a dataset of tweets using machine learning techniques to conduct sentiment analysis","The objective is to predict the sentiment associated with a tweet based on its text content. Achieved a F1 score of 0.85 using a Tf-idf Vectorizer"],"stack":["Python","Scikit-Learn","Pandas"],"logoheight":80,"colourPrimary":"linear-gradient(to bottom, #465a90, #1e3470)","colourSecondary":"linear-gradient(to bottom, #465a90, #1e3470)","pathImage":"src/media/background/twitter.png"},{"id":2,"link":"https://github.com/MatteoM95/Smart-Home-Vigilance-System","company":"Politecnico di Torino","title":"Smart Home Surveillance System","dateFrom":"May 2022","dateTo":"July 2022","info":["The indoor video surveillance system is designed to detect human intrusion through the integration of sound and visual recordings. In case of intrusion the system promptly sends a notification via Telegram.","This system operates entirely on Edge Computing taking advantages of TensorFlow Lite libraries, running on a Raspberry Pi 4."],"stack":["Python","TensorFlow","OpenCV"],"logowidth":80,"colourPrimary":"linear-gradient(to bottom, #465a90, #1e3470)","colourSecondary":"linear-gradient(to bottom, #465a90, #1e3470)","pathImage":"src/media/background/security.png"},{"id":3,"link":"https://github.com/MatteoM95/Default-of-Credit-Card-Clients-Dataset-Analisys","company":"Politecnico di Torino","title":"Default of Credit Card Clients Dataset Analysis","dateFrom":"July 2022","dateTo":"September 2022","info":["This project involved an in-depth data analysis utilizing advanced Machine Learning techniques such as Synthetic Minority Over-sampling Technique (SMOTE), that address class imbalance, and Principal Component Analysis (PCA), that reduce high dimensional complexity.","Several classifiers are tested in the evaluation process, such as Logistic Regression, Support Vector Machines (SVM), and Random Forest. By combining different preprocessing configurations together, it was possible to achieve a good 0.53 F1 score."],"stack":["Python","ML Libraries","Grid Search"],"logoheight":80,"colourPrimary":"linear-gradient(to bottom, #465a90, #1e3470)","colourSecondary":"linear-gradient(to bottom, #465a90, #1e3470)","pathImage":"src/media/background/card.png"},{"id":4,"link":"https://github.com/MatteoM95/Real-time-Domain-Adaptation-in-Semantic-Segmentation","company":"Politecnico di Torino","title":"Real time Domain Adaptation in Semantic Segmentation","dateFrom":"March 2021","dateTo":"July 2021","info":["Project on computer vision focusing on image processing for realtime applications within the realm of autonomous driving solutions.","By using a domain adaptation in combination with a style transfer techniques, it is possible to overcome the problem of large annotated datasets for semantic segmentation."],"stack":["Python","Pytorch","CUDA"],"logoheight":80,"colourPrimary":"linear-gradient(to bottom, #465a90, #1e3470)","colourSecondary":"linear-gradient(to bottom, #465a90, #1e3470)","pathImage":"src/media/background/idda.png"},{"id":5,"link":"https://github.com/MatteoM95/Multitask-segmentation-from-satellite-imagery-for-burned-area-delineation-and-severity-estimation","company":"Links Foundation","title":"Multitask segmentation from satellite imagery for burned area delineation and severity estimation","dateFrom":"October 2022","dateTo":"July 2023","info":["A multi-task learning semantic segmentation approach is employed for targeting both wildfire delineation and burn severity estimation.","By exploiting a large dataset of images from past wildfires and integrating both tasks into a single network can exceed the state-of-the-art results on this topic."],"stack":["Python","Pytorch","GIS","CUDA"],"logoheight":80,"colourPrimary":"linear-gradient(to bottom, #98cff0, #62b9e9)","colourSecondary":"linear-gradient(to bottom, #98cff0, #62b9e9)","pathImage":"src/media/background/wildfire.png"}]}')
        },
        147: function(e, a) {
            e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RERCMUIwQTM4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RERCMUIwQTI4NkNFMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTMyOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBNDE0QUJDOTlBMTExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8kSqyAAADD5JREFUeNrsXQ2QlVUZfllYUBe2YCuQFNel9Q9EcVEQSA3xB2pTSVcESjELnZomBW0ya5w0m1GyzKSmtEYDc6hGohRDrUGQZUko0EARCAXK+FEwXFz2yvY+fO/d+fbu/fm++533+7n3PDPPwC6Xc77zPvc7P+95z3t6dHR0kEXpoleJtGMwcwTzE8w6Zi1zELNG2JfZJ+P/tDEPMPcK32JuY25lbmauZ/476YbpkcA3+BjmucxxwlHMAUp1vc18ifmisJnZagU2jyHMKcxJzPOzvI1hAW/9MuYS5pPMN6zAxeNjzOnMq5mjY/qMLcyFzPnMXVZgb7iQOYt5ObMyIT1hO/MPzJ8xn7cCZ5/sTWXeKpOlJAOTs/uYTzBT5S4whJ3BvIM5tMRWKFuYd0v3nSpHgT/NnMs8pcSXoq8xZzOfKheBT2I+wLy0zHwOzzC/LoKHhooQ68KE6XYZo8pNXJI2rxMbVJbaG3wa83HmGWRBIvQ05oakv8E9mF9hrrHidsEZYpOvio0S+QbD//tL5lVWz7z4HXMmOX7xxAhcz1wkXbNFYWxkXsZ8PQld9HjmKiuuL5wqNhsfd4GbyHHVDbCa+cYAsV1TXAXGOPIbZm+rVdHoLTa8Pm4C3yQTqgqrkRFNHhGbxmKSNVPEtTCPLwa1bVCBm6RLsW+uDg4zryFnzzl0gcfLpMCOubo4RM4e+YowBa6Xab2dLYcDxIaNKWadXIzA8FCtlrWbRXiAM+Qc8unx8jt2wm/6KytuJDhVbN9DU2BsHFwZ8EH3keNof1n+XurYJ21Fm/cHLOtK0UCli4brcS0FD1n9DHWNbjhOJhHYL4U/9uiEC3qQnAC8Z2QSusP1b43MxQHLR+huA/OfJgXGBvXfKPiWHyYLOHHQnuPfq8mJ0UJUZdKC7/CWIqoSMVjv5rHjf5n9A9aF/eSz89jRdxd9G5nZz11S4KFgmHlSF4LcWxIg7Gp51hHy7O/m+Wy72CAoYJ9vmBqDT2Z+25AxXvDxWXRxOKLyOXLOC8UNW2VMHCPP6hXLDdV/h2gTuIv+M/NiQw/VIOO4X2DcnyNftFxzgDdkXHqVuZOcg2MgDpa9J2Njm6s8jPVV5BxOGyz8ODlRnsOYJ+QZA+9h3st8v0gbvGTInkuZlwQRGKGtfzL0MO1i0PYAZcDBAkf8cOZK6RGWy/hnOiIC6/3TyfHYnUfOQTd8gW6gYJGRlfKFMxV4lzlp9SxwL2nQSYYe5M08b4XftTh4OOQuOT2cmah3u6weTOB1WeGk/I7BMwyKC7xlqJyOCMRNC2uq3v8YfK560crXJKtSBnHT60MLB6bPGEOr3n4ExkGwoVaHxABaXe1H4DkKD3GU1aETGt66W70KPJF0vEgnWF07MUShzNNFu4IC36jUqIHMflbbIzYYqFT2TYUERtqEzypVjqXNWVbfIzbQOq7SKBrmFHgG6Z58m2j1VbVBZeaSKVPgJuXGNVp91W3QlEtgJBDTzmZzt9VX3Qaj3Utct8CXK1d8Fzkn6codsMF3leu4LJvAkxQrXBVCo5KEu8QmWpjcObOVzQakB0S0hUYGuQ9kjbbR6toF2JbELphGvlBsaSKkuTX9Bo8jvfSAD1lxs+JVsY0G+oimnV30WKWKsCH+PatlTtxDxQUNeMFYt8DjlCr5NcU0h2NMsEtspIFx7jF4L+kcQ8GUfbXVMS9wWkEjuBBzqhoIjDikHQoVbCW75egVW8QPYRrHoYvWij9+2urmGUuUyh0BgeuVCl9hdYvcVvUQuFapcDv2Rm+rWi2BERr7ptXNM2CrlJbAgxQKRljoB1Y3z4C4OxXKHQSBaxQK/p/VzDc0jtLWaAm83+rlGwe0BNaIk+pp9fINjU2HfhBYI0tOX6uXb2iEFffWym9VZfXyjWqNQrUEtrmzYmIz+KI1EkYfki7HXm3q/UXDtmGlRsEppW/jYKubZwwmnXDlVIXikuZEq5tn1CmVu7+C9HJV1VndIn8Z9kHg3UqFj7K6ecbZSuXuhsA7lQofa3WL3FY7NQU+k5xwXIvCPoMRmgJvVioc7soJVr+CmEB6rt3NEHiT4sNPsfoVxBWKZW+CowPpfLYrVYBtQ+w3t1odswJDGLIPaR2MPx5vMCIq9ypVgAefbnXMiemK4iJsdkfaF71GsRG3kL20Ixt6iW20cCRdYtrwKxUrwiGra62e3fB50r39vNkt8IvKjcEZnGqraSeqxSaaWOEWGD+0KVaGidb9VtdO/Ih0gh3TaMsUGFtVy5UbhVu8plltjyRJmalcx3LRtMvk548hNO5hcpJ8lytw4u/nIdTTmQLanU4Ymei2hVA5Ut4jwXhLmYmLk5ZLQ5qL1JKTIL3LG4xfhHHcpFoaenEZiYv8J8+GJO7qtLiUZX26IMRZJE7U3UmlHWKLtiFt0lMUXhrHx90/ZGZ8/yg5u0uVIRoBSzRc9rSuxMRFysJ5pJ97zA2cCYPreVeuNxib/4simHjAk/YT0snCGjYQnfELcjxJo0OuexFlpMzIdmfDBcy/+ii0WWZtKBjZArB5jS2wXkV+AzFM/JSSdfwUyUU/SU6m3qYIh50JmdrlupQDV9+M9FAgbg/5EHU/SYiu/mbmbCo+3hepl56QL8/fKX4huD1lyYekY1Mp+iBDDHFndvvm5RAYi3Gv2V9uZ34/y0IbnpTH5I0cGfDhcR3cC9Jb4Iq9Vyj8iy0xtuE6n1HSS0HcD8foCwff9nyvAqN7RaIur0lUHiDnqrU215pvgMyUEZKykFzp9QwB25xbZD39TTJ/Ewsmmj+WttRJTxVXwA7YuOge4w6Bc/DaDn/YyByZUcYVzGXMY+VP0ziQpU6TbGC+3xF/XJerDfkaV8Fc77OiVuYlrjKGMXczJzFrmNsNN2yWorhpfi3m4r4sWmV9/kJX28ED4zcdEu5HQlbzbHvMkynPNWxFTCrOIv1LsjCZQtLQuN56PpnypGEqFGmxhPzfXYgrY35PXe8OqBJXHcaIRw017D4K5wY0rBDujam4T1OBHFtebh/FRAt3GPrNRovdqfQFH8fIpAj37OG2TORKPjlAwxDMN5DCu02trziB4nT3Eya0w2SCRcW+wekZ2neKeIBG18y5VTxWt8nyppGCBdz/hcK9Ku+A1Bkn3FlIXK8CA/dTcXfe/sBVBxwXy6S7xloSV9duKLJxKyMwaJwy98G1O9fLB70KnBLnh9+35hTqfssI7uPFjseD5By6wpfgkI8yEai/NAKjxiWp+UHRImVSYOA1cT/6xeyMn58jJ7LjoHTdc8TN9y1ydpYyg+T3iGcM9xyMkS/NPyIw7LaYCHyzOKG8oYh14fwi1mrn5invROazzAeZR8nv+jOHMPu5PjeKOZd5fghr32ysjcGad4Hf5y6moVXMdT4frJnZM0d5dcw98rkG+d158rsNIjZ+t1Y+Mz8igT8SsbhwOvX1+9zFnDh4T5Y/fg6Oj5FZXzYgcfjx5ISRrnGNM0jQ+S+Xfxt3AV3KvD6irjEVYbe8R2zuOxuel3VwLmA35XnydxcuIjfmUTKBnaN3IppUTSx25RDkzBC27qb69CY9JNP7ygQKHMUzw7bTgiwLgx4KW8z8gk+RMatGQMFFCRO4KgJxYdtAIVQmTv0tkHHRj8jDZS2Lvdwbyd8xjmOp9JOdwpazyECUa5AxOBM46/pYgC8N3G6vyHpzn6yHEeuEdMfYuKgl54o8BBL0p/AjOmpl0hfWm2skhNlkCls8EJKqLfQ58UpjKHmPIOlTom/uQZnXLDZVoOmD2dha/BTp33Z2dAmKC5tdaFJcDYFJxtVzInInJhXrxWbNpgvWSq2AszHYVHjUalcQiF4dS67zREkQGIDH6zrmDfJ3i+72+ZJMqNTsE0ZylEfICchusZp2GcYQT/awdkVhZb9BNj1EdNxC4UZixHGWPEdssSmMCsNMb4TgtR+SE534ZBmKizafRk6AQ2iXhkWRvwqTiSmyJFhbBsLiXNVF0uZtYVceZYIyBLEhNusa8h8Ok4SUTBulbWjjc1E9RNQZ6OAnxQlC+KZx7HKVx//3dgTP6jXNVIu0Zbi07XCUBjbpizYFBAekz9lm81itoeiyySOytCGH+L8l51zzyjgZM44Cp4EN9qvI2cRAcAE2HnC4+ctaTgEPqCXn9P4F8maix1kg4r4TRyPGWWCLEhiDLZTxfwEGAIg2ItsKhKpcAAAAAElFTkSuQmCC"
        },
        148: function(e, a, t) {
            e.exports = t.p + "src/media/contact/email.png"
        },
        153: function(e, a, t) {
            e.exports = t(548)
        },
        158: function(e, a, t) {}, // https://pngimg.com/uploads/tram/tram_PNG46.png
        159: function(e, a, t) {},
        160: function(e, a, t) {},
        511: function(e, a, t) {},
        512: function(e, a, t) {},
        516: function(e, a, t) {},
        517: function(e, a, t) {},
        537: function(e, a, t) {},
        538: function(e, a, t) {},
        539: function(e, a, t) {
            e.exports = t.p + "src/media/logo/linksfoundation.png"
        },
        540: function(e, a, t) {
            e.exports = t.p + "src/media/logo/politecnicoditorino.png"
        },
        541: function(e, a, t) {},
        542: function(e, a, t) {},
        543: function(e, a, t) {},
        546: function(e, a, t) {},
        547: function(e, a, t) {},
        548: function(e, a, t) {
            "use strict";
            t.r(a);
            var n = t(0),
                r = t.n(n),
                c = t(32),
                i = t.n(c),
                o = (t(158), t(159), t(24)),
                l = (t(160), t(64)),
                A = t.n(l),
                s = t(18),
                m = t(19),
                g = t(133),
                u = t.n(g),
                p = t(66),
                E = t.n(p),
                d = t(136),
                S = t.n(d),
                k = (t(511), t(512), function(e) {
                    var a = e.toggleMobilenavVisible,
                        t = e.mobilenavVisible;
                    return r.a.createElement("div", {
                        className: "mobilenav-wrapper"
                    }, r.a.createElement("div", {
                        className: "mobilenav " + (t ? "on" : "off")
                    }, r.a.createElement("div", {
                        className: "mobilenavlinks"
                    }, r.a.createElement("div", {
                        className: "mobilenavlink"
                    }, r.a.createElement(m.Link, {
                        activeClass: "active",
                        to: "home",
                        spy: !0,
                        smooth: !0,
                        duration: 500,
                        onClick: a
                    }, "HOME")), r.a.createElement("div", {
                        className: "mobilenavlink"
                    }, r.a.createElement(m.Link, {
                        activeClass: "active",
                        to: "about",
                        spy: !0,
                        smooth: !0,
                        offset: 1,
                        duration: 500,
                        onClick: a
                    }, "ABOUT")), r.a.createElement("div", {
                        className: "mobilenavlink"
                    }, r.a.createElement(m.Link, {
                        activeClass: "active",
                        to: "experience",
                        spy: !0,
                        smooth: !0,
                        duration: 500,
                        onClick: a
                    }, "EXPERIENCE")), r.a.createElement("div", {
                        className: "mobilenavlink"
                    }, r.a.createElement(m.Link, {
                        activeClass: "active",
                        to: "projects",
                        spy: !0,
                        smooth: !0,
                        duration: 500,
                        onClick: a
                    }, "PROJECTS")), r.a.createElement("div", {
                        className: "mobilenavlink"
                    }, r.a.createElement(m.Link, {
                        activeClass: "active",
                        to: "contact",
                        spy: !0,
                        smooth: !0,
                        duration: 500,
                        onClick: a
                    }, "CONTACT")))))
                }),
                J = function() {
                    var e = Object(n.useState)(!1),
                        a = Object(o.a)(e, 2),
                        t = a[0],
                        c = a[1],
                        i = Object(n.useState)(""),
                        l = Object(o.a)(i, 2),
                        A = l[0],
                        s = l[1],
                        g = function() {
                            c(!t), s("" === A ? "open" : "")
                        };
                    return r.a.createElement("div", {
                        className: "navbar"
                    }, r.a.createElement("div", {
                        className: "navlinks"
                    }, r.a.createElement("div", {
                        className: "navlink-wrapper"
                    }, r.a.createElement(m.Link, {
                        to: "home",
                        spy: !0,
                        smooth: !0,
                        duration: 500
                    }, "HOME")), r.a.createElement("div", {
                        className: "navlink-wrapper"
                    }, r.a.createElement(m.Link, {
                        to: "about",
                        spy: !0,
                        smooth: !0,
                        duration: 500
                    }, "ABOUT")), r.a.createElement("div", {
                        className: "navlink-wrapper"
                    }, r.a.createElement(m.Link, {
                        to: "projects",
                        spy: !0,
                        smooth: !0,
                        duration: 500
                    }, "PROJECTS")), r.a.createElement("div", {
                        className: "navlink-wrapper"
                    }, r.a.createElement(m.Link, {
                        to: "contact",
                        spy: !0,
                        smooth: !0,
                        duration: 500
                    }, "CONTACT"))), r.a.createElement("div", {
                        className: "hamburger"
                    }, r.a.createElement("div", {
                        id: "hamburger-icon",
                        className: A,
                        onClick: g
                    }, r.a.createElement("span", null), r.a.createElement("span", null), r.a.createElement("span", null), r.a.createElement("span", null))), r.a.createElement(k, {
                        toggleMobilenavVisible: g,
                        mobilenavVisible: t
                    }))
                },
                w = t(134),
                C = t.n(w),
                B = t(135),
                h = t.n(B),
                f = t(90),
                I = t.n(f),
                N = function() {
                    var e = Object(n.useState)(!1),
                        a = Object(o.a)(e, 2),
                        t = a[0],
                        c = a[1];
                    return r.a.createElement("div", {
                        className: "home-wrapper"
                    }, r.a.createElement("div", {
                        className: "home"
                    }, r.a.createElement(u.a, {
                        className: "particles",
                        params: C.a.particles
                    }), r.a.createElement("div", {
                        className: "greeting".concat(t ? "" : " hide")
                    }, r.a.createElement(A.a, {
                        bottom: !0,
                        distance: "40px"
                    }, r.a.createElement("img", {
                        className: "profile",
                        alt: "m.merlo profile",
                        src: h.a,
                        onLoad: function() {
                            return c(!0)
                        }
                    }), r.a.createElement("h1", {
                        className: "greeting-text"
                    }, "Hello, I'm ", r.a.createElement("span", {
                        className: "name"
                    }, "Matteo Merlo"), " ", r.a.createElement("span", {
                        className: "wave-emoji",
                        role: "img",
                        "aria-label": "waving hand"
                    }, "\ud83d\udc4b")), r.a.createElement("h1", {
                        className: "greeting-text"
                    }, r.a.createElement(E.a, {
                        options: {
                            strings: ["I'm a Data Scientist from Italy", "I love learning new tech", "Passionate about tech innovations", "Always mastering new tech tools"],
                            autoStart: !0,
                            loop: !0,
                            deleteSpeed: 10,
                            cursor: "<",
                            delay: 100
                        }
                    })), r.a.createElement("div", {
                        className: "scroll-down"
                    }, r.a.createElement(m.Link, {
                        activeClass: "active",
                        to: "about",
                        spy: !0,
                        smooth: !0,
                        offset: -63,
                        duration: 100
                    }, r.a.createElement(S.a, {
                        fontSize: "large",
                        style: {
                            pointerEvents: "fill",
                            cursor: "pointer"
                        }
                    }))) // ++++++++++++++++++

                    , r.a.createElement("a", { // Button Linkedin front page
                        href: "https://www.linkedin.com/in/matteomerlo95/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("img", {
                        src: I.a,
                        alt: "Linkedin Logo",
                        width: "40px"
                    }))


                    )), r.a.createElement(J, null)))
                },
                b = (t(516), t(517), function(e) {
                    return r.a.createElement("section", {
                        className: e.title.toLowerCase()
                    }, r.a.createElement(s.Fade, {
                        left: !0,
                        duration: 1e3,
                        distance: "70px"
                    }, r.a.createElement("h1", {
                        className: "section-title"
                    }, e.title)), r.a.createElement(s.Fade, {
                        right: !0,
                        duration: 1e3
                    }, r.a.createElement("div", {
                        className: "underline"
                    })), e.children)
                }),
                v = t(137),
                D = t.n(v),
                Q = t(138),
                O = function(e) {
                    var a = Object(n.useState)({
                            width: 0
                        }),
                        t = Object(o.a)(a, 2),
                        r = t[0],
                        c = t[1];
                    return Object(n.useEffect)((function() {
                        var a = function() {
                                return {
                                    width: e.current.offsetWidth
                                }
                            },
                            t = function() {
                                c(a())
                            };
                        return e.current && c(a()), window.addEventListener("resize", t),
                            function() {
                                window.removeEventListener("resize", t)
                            }
                    }), [e]), r
                },
                M = function() {
                    var e = Object(n.useRef)(),
                        a = O(e).width;
                    return r.a.createElement(s.Fade, {
                        duration: 1e3
                    }, r.a.createElement("div", {
                        style: {
                            position: "relative",
                            width: "100%",
                            maxWidth: 600
                        }
                    }, r.a.createElement(D.a, {
                        once: !0
                    }, (function(t) {
                        return r.a.createElement("div", {
                            className: "skills-wrapper",
                            style: t ? {
                                transition: "1s opacity ease-in-out",
                                transform: "translateX(0)",
                                opacity: 1
                            } : {}
                        }, r.a.createElement("h2", null, "Skills"), r.a.createElement("ul", {
                            className: "skills",
                            ref: e
                        }, Q.a.map((function(e) {
                            return r.a.createElement("li", {
                                className: "skill-bar-wrapper",
                                key: e.skillName
                            }, r.a.createElement("div", {
                                className: "skill-bar",
                                style: t ? {
                                    transition: "".concat(1 + e.id / 10, "s width ease-in-out"),
                                    width: a * (e.amount / 100)
                                } : {
                                    width: 1
                                }
                            }), r.a.createElement("div", {
                                className: "skill-name"
                            }, e.skillName))
                        }))))
                    }))))
                },
                y = function() {
                    return r.a.createElement(b, {
                        title: "About"
                    }, r.a.createElement("div", {
                        className: "about-content"
                    }, r.a.createElement(s.Fade, {
                        duration: 1e3
                    }, r.a.createElement("div", {
                        className: "about-text"
                    }, r.a.createElement("h2", null, "Who am I?"), r.a.createElement("p", null, "I'm Matteo", " ", r.a.createElement("span", {
                        role: "img",
                        "aria-label": "lightning"
                    }, "\ud83d\udfe9\u2b1c\ufe0f\ud83d\udfe5"), " "), r.a.createElement("p", null, r.a.createElement("span", {
                        role: "img",
                        "aria-label": "lightning"
                    }, "\ud83d\udcca"), " ", "I'm a data science and data engineer graduated from", " ", r.a.createElement("a", {
                        className: "textLink",
                        href: "https://www.polito.it/en",
                        target: "_blank",
                        spy: !0,
                        smooth: !0,
                        duration: 500,
                        style: {
                            textDecoration: "none"
                        }
                    }, "Politecnico di Torino"), " ",  "in 2023, focusing on Machine Learning, Deep Learning and Data Engineering"), r.a.createElement("p", null, r.a.createElement("span", {
                        role: "img",
                        "aria-label": "lightning"
                    }, "\ud83d\udcbb"), " ", "You can find me working mainly with Python, PyTorch, TensorFlow, SQL, and C++"), r.a.createElement("div", {
                        className: "typewriter"
                    }, r.a.createElement("p", {
                        className: "typewriter-start"
                    }, r.a.createElement("span", {
                        role: "img",
                        "aria-label": "lightning"
                    }, "\ud83d\udd0d"), " ", "I love"), r.a.createElement(E.a, {
                        options: {
                            strings: ["learning new technologies", "solving complex problems", "collaborating with others"],
                            autoStart: !0,
                            loop: !0
                        }
                    })), r.a.createElement("p", null, "In 2020 I graduated in Computer Engineering at", " ", r.a.createElement("a", {
                        className: "textLink",
                        href: "https://www.polito.it/en",
                        target: "_blank",
                        spy: !0,
                        smooth: !0,
                        duration: 500,
                        style: {
                            textDecoration: "none"
                        }
                    }, "Politecnico di Torino"), " ", "(Turin, IT). Then I started my M.Sc in Data Science and Engineering. In 2022 i had the opportunity to do my thesis at ", " ", r.a.createElement("a", {
                        className: "textLink",
                        href: "https://linksfoundation.com/",
                        target: "_blank",
                        spy: !0,
                        smooth: !0,
                        duration: 500,
                        style: {
                            textDecoration: "none"
                        }
                    }, "Links Foundation"), " ", "(Turin, Italy), focused on the critical issue of wildfires. Here i had the oppurtunity to partecipate and publish my first conference paper and win in september 2023", " ", r.a.createElement("a", {
                        className: "textLink",
                        href: "https://sites.google.com/view/maclean23/program",
                        target: "_blank",
                        spy: !0,
                        smooth: !0,
                        duration: 500,
                        style: {
                            textDecoration: "none"
                        }
                    }, "Best Paper Award"), " ", " at ECML PKDD 2023 - MACLEAN.\nDuring my master I had the chance to work on several", " ", r.a.createElement(m.Link, {
                        className: "textLink",
                        to: "projects",
                        spy: !0,
                        smooth: !0,
                        duration: 500
                    }, "projects"), "; if you want to see all of them checkout my", " ", r.a.createElement("a", {
                        className: "textLink",
                        href: "https://github.com/MatteoM95",
                        target: "_blank",
                        spy: !0,
                        smooth: !0,
                        duration: 500,
                        style: {
                            textDecoration: "none"
                        }
                    }, "GitHub"), " profile."), r.a.createElement("div", {
                        className: "location-wrapper"
                    }, r.a.createElement("svg", {
                        className: "octicon octicon-location",
                        viewBox: "0 0 16 16",
                        version: "1.1",
                        width: "16",
                        height: "16",
                        "aria-hidden": "true"
                    }, r.a.createElement("path", {
                        fill: "white",
                        fillRule: "evenodd",
                        d: "M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
                    })), r.a.createElement("p", null, "Turin, Italy")))), r.a.createElement(M, null)))
                },
                G = (t(537), t(538), function(e) {
                    var a = e.experience,
                        n = a.link,
                        c = a.company,
                        i = a.title,
                        o = a.dateFrom,
                        l = a.dateTo,
                        A = a.info,
                        s = a.stack;
                    return r.a.createElement("a", {
                        className: "experience-link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("div", {
                        className: "experience-card-wrapper"
                    }, r.a.createElement("div", {
                        className: "experience-card"
                    }, r.a.createElement("div", {
                        className: "experience-card-top"
                    }, r.a.createElement("div", {
                        className: "experience-bg",
                        style: {
                            background: a.colourPrimary,
                            backgroundImage: `url(${a.pathImage})`, // using template literals to insert the image path.
                            backgroundSize: 'cover', // this will make sure your image covers the whole div, you can use values as per your requirement.
                            backgroundPosition: 'center', // centers the image within the div.
                            backgroundRepeat: 'no-repeat', // prevents the image from repeating.
                            
                          }
                        // style: {
                        //     background: a.colourPrimary
                        // }
                    }), r.a.createElement("h2", null, c), r.a.createElement("div", {
                        className: "image-wrapper"
                    }, r.a.createElement("div", {
                        className: "experience-bg logo-bg",
                        style: {
                            background: a.colourSecondary ? a.colourSecondary : a.colourPrimary
                        }
                    }), r.a.createElement("img", {
                        className: "company-logo",
                        src: t(130)("./".concat(c.replace(/ /g, "").toLowerCase(), ".png")),
                        alt: "".concat(c, "-logo"),
                        style: a.logoheight ? {
                            height: "".concat(a.logoheight, "%")
                        } : {
                            width: "".concat(a.logowidth, "%")
                        }
                    }))), r.a.createElement("div", {
                        className: "experience-card-bottom"
                    }, r.a.createElement("div", null, r.a.createElement("h2", null, i), r.a.createElement("h3", null, o, " - ", l), r.a.createElement("ul", null, A.map((function(e, a) {
                        return r.a.createElement("li", {
                            key: "".concat(c, "-point-").concat(a)
                        }, e)
                    })))), r.a.createElement("div", {
                        className: "experience-card-tech"
                    }, r.a.createElement("ul", null, s.map((function(e) {
                        return r.a.createElement("li", {
                            key: "".concat(c, "-").concat(e)
                        }, e)
                    }))))))))
                }),
                x = t(139),
                j = function() {
                    return r.a.createElement(b, {
                        title: "Main Projects"
                    }, r.a.createElement("div", {
                        className: "experience-content"
                    }, r.a.createElement("ul", {
                        className: "experience-list"
                    }, x.experience.reverse().map((function(e) {
                        return r.a.createElement("li", {
                            key: "experience-".concat(e.company)
                        }, r.a.createElement(s.Fade, {
                            bottom: !0,
                            duration: 1e3,
                            distance: "20px"
                        }, r.a.createElement(G, {
                            experience: e
                        })))
                    }))), r.a.createElement(s.Fade, {
                        bottom: !0,
                        duration: 1200,
                        distance: "20px"
                    }, r.a.createElement("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center"
                        }
                    }))))
                },
                U = t(26),
                T = t.n(U),
                Y = t(140),
                F = t(141),
                H = (t(541), t(92)),
                L = t(568),
                V = t(567),
                P = (t(542), function(e) {
                    var a = e.project;
                    if ("github" === e.type) return r.a.createElement("a", {
                        className: "project-link",
                        href: a.url,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("div", {
                        className: "project-card-wrapper"
                    }, r.a.createElement("div", {
                        className: "project-card"
                    }, r.a.createElement("div", {
                        className: "project-name"
                    }, r.a.createElement("svg", {
                        "aria-hidden": "true",
                        className: "octicon",
                        height: "20",
                        role: "img",
                        viewBox: "0 0 12 16",
                        width: "14"
                    }, r.a.createElement("path", {
                        fill: "white",
                        fillRule: "evenodd",
                        d: "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
                    })), r.a.createElement("h2", {
                        className: "project-title"
                    }, a.name)), r.a.createElement("p", {
                        className: "project-description"
                    }, a.description), r.a.createElement("div", {
                        className: "project-info"
                    }, r.a.createElement("div", {
                        className: "project-info-left"
                    }, a.languages.nodes.map((function(e) {
                        return r.a.createElement("div", {
                            key: "".concat(a.name, "-").concat(e.name),
                            className: "language"
                        }, r.a.createElement("div", {
                            className: "language-colour",
                            style: {
                                backgroundColor: "".concat(e.color)
                            }
                        }), r.a.createElement("p", {
                            className: "language-name"
                        }, e.name))
                    }))), r.a.createElement("div", {
                        className: "project-info-right"
                    }, r.a.createElement("p", {
                        className: "project-size"
                    }, a.diskUsage, "KB"))))))
                }),
                z = (t(543), function(e) {
                    var a = e.name,
                        n = e.link,
                        c = e.description,
                        i = e.colour,
                        o = e.languages;
                    return r.a.createElement("a", {
                        className: "featured-project-link",
                        href: n,
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("div", {
                        className: "featured-project-wrapper"
                    }, r.a.createElement("div", {
                        className: "featured-project"
                    }, r.a.createElement("div", {
                        className: "featured-project-bg",
                        style: {
                            background: i
                        }
                    }), r.a.createElement("div", {
                        className: "featured-project-top"
                    }, r.a.createElement("img", {
                        className: "featured-project-image",
                        src: t(130)("./".concat(a.replace(/ /g, "").toLowerCase(), ".png")),
                        alt: "".concat(a, "-logo")
                    })), r.a.createElement("p", null, c), r.a.createElement("div", {
                        className: "project-info"
                    }, r.a.createElement("div", {
                        className: "project-info-left"
                    }, o.map((function(e) {
                        return r.a.createElement("div", {
                            key: "".concat(a, "-").concat(e.name),
                            className: "language"
                        }, r.a.createElement("div", {
                            className: "language-colour",
                            style: {
                                backgroundColor: "".concat(e.color)
                            }
                        }), r.a.createElement("p", {
                            className: "language-name"
                        }, e.name))
                    })))))))
                });

            function R() {
                var e = Object(F.a)(['\n  fragment repoProperties on Repository {\n    name \n    description\n    url\n    id\n    diskUsage\n    languages(first: 2, orderBy: { field: SIZE, direction: DESC }) {\n      nodes {\n        name\n        color\n      }\n    }\n  }\n\n  {\n    user(login: "', '") {\n      ', "\n    }\n  }"]);
                return R = function() {
                    return e
                }, e
            }
            var Z = Object(V.a)((function(e) {
                    return {
                        moreProjects: {
                            "&": {
                                margin: "20px auto",
                                backgroundColor: "#2c42d1", // 39b175
                                boxShadow: "none",
                                "&:hover": {
                                    backgroundColor: "#2609e3", //  0be779
                                    boxShadow: "none"
                                }
                            },
                            "& > *": {
                                color: "white",
                                padding: 4,
                                fontSize: "15px",
                                fontWeight: "600"
                            }
                        }
                    }
                })),
                K = new H.a({
                    uri: "https://api.github.com/graphql",
                    request: function(e) {
                        console.log("Token is ".concat(Object({
                            NODE_ENV: "production",
                            PUBLIC_URL: ".",
                            WDS_SOCKET_HOST: void 0,
                            WDS_SOCKET_PATH: void 0,
                            WDS_SOCKET_PORT: void 0
                        }).REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN)), e.setContext({
                            headers: {
                                authorization: "Bearer ".concat(Object({
                                    NODE_ENV: "production",
                                    PUBLIC_URL: ".",
                                    WDS_SOCKET_HOST: void 0,
                                    WDS_SOCKET_PATH: void 0,
                                    WDS_SOCKET_PORT: void 0
                                }).REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN)
                            }
                        })
                    }
                }),
                q = {
                    owner: "merlo",
                    repositories: ["portfolio-landing-page", "react-pokedex", "JS-DOM-for-beginners"]
                },
                W = Object(H.b)(R(), q.owner, q.repositories.map((function(e, a) {
                    return "repo".concat(a + 1, ': repository(name: "').concat(e, '") {\n        ...repoProperties\n      }')
                })).join("\n")),
                _ = function() {
                    var e = Object(n.useState)([]),
                        a = Object(o.a)(e, 2),
                        t = a[0],
                        c = a[1],
                        i = Object(n.useState)(null),
                        l = Object(o.a)(i, 2),
                        A = l[0],
                        m = l[1],
                        g = Z();
                    Object(n.useEffect)((function() {
                        u()
                    }), []);
                    var u = function() {
                        var e = Object(Y.a)(T.a.mark((function e() {
                            var a;
                            return T.a.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, K.query({
                                            query: W
                                        });
                                    case 3:
                                        a = e.sent, c(a.data.user), m(!1), e.next = 12;
                                        break;
                                    case 8:
                                        e.prev = 8, e.t0 = e.catch(0), console.log(e.t0), m(!0);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 8]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    return !1 === A ? r.a.createElement(b, {
                        title: "Projects"
                    }, r.a.createElement("div", {
                        className: "projects-content"
                    }, r.a.createElement("ul", {
                        className: "projects-list"
                    }, X.a.map((function(e) {
                        return r.a.createElement("li", {
                            key: "featured-project-".concat(e.id)
                        }, r.a.createElement(s.Fade, {
                            bottom: !0,
                            duration: 1e3,
                            distance: "20px"
                        }, r.a.createElement(z, {
                            name: e.name,
                            link: e.link,
                            description: e.description,
                            colour: e.colour,
                            languages: e.languages
                        })))
                    })), Object.keys(t).map((function(e) {
                        return t[e].name ? r.a.createElement("li", {
                            key: t[e].name
                        }, r.a.createElement(s.Fade, {
                            bottom: !0,
                            duration: 1e3,
                            distance: "20px"
                        }, r.a.createElement(P, {
                            project: t[e],
                            type: "github"
                        }))) : null
                    }))), r.a.createElement(s.Fade, {
                        bottom: !0,
                        duration: 1e3,
                        distance: "20px"
                    }, r.a.createElement("div", {
                        className: "more-projects-wrapper"
                    }, r.a.createElement("a", {
                        className: "project-link",
                        href: "https://github.com/MatteoM95", // https://github.com/AndreaGhiglione
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement(L.a, {
                        className: g.moreProjects,
                        type: "button",
                        variant: "contained"
                    }, "more projects")))))) : null
                },
                $ = (t(546), t(147)),
                ee = t.n($),
                ae = t(148),
                te = t.n(ae),
                ne = function() {
                    return r.a.createElement(b, {
                        title: "Contact"
                    }, r.a.createElement(s.Bounce, {
                        cascade: !0
                    }, r.a.createElement("div", {
                        className: "links"
                    }, r.a.createElement("a", {
                        href: "https://www.linkedin.com/in/matteomerlo95/",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("img", {
                        src: I.a,
                        alt: "Linkedin Logo",
                        width: "40px"
                    })), r.a.createElement("a", {
                        href: "https://github.com/MatteoM95",
                        target: "_blank",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("img", {
                        src: ee.a,
                        alt: "Github Logo",
                        width: "40px"
                    })), r.a.createElement("a", {
                        href: "mailto:matteo.merlo.995@gmail.com",
                        rel: "noopener noreferrer"
                    }, r.a.createElement("img", {
                        src: te.a,
                        alt: "Email Logo",
                        width: "40px"
                    }))
                    
                    // , r.a.createElement("a", {
                    //     href: "https://www.linkedin.com/in/matteomerlo95/",
                    //     target: "_blank",
                    //     rel: "noopener noreferrer"
                    // }, r.a.createElement("img", {
                    //     src: I.a,
                    //     alt: "Linkedin Logo",
                    //     width: "150px"
                    // }))
                    )))
                },
                re = (t(547), t(149)),
                ce = t.n(re),
                ie = function() {
                    var e = Object(n.useState)(!1),
                        a = Object(o.a)(e, 2),
                        t = a[0],
                        c = a[1],
                        i = function() {
                            document.body.scrollTop > window.innerHeight + 63 || document.documentElement.scrollTop > window.innerHeight + 63 ? c(!0) : c(!1)
                        };
                    return window.onscroll = function() {
                        i()
                    }, window.onload = function() {
                        i()
                    }, r.a.createElement(m.Link, {
                        activeClass: "active",
                        to: "about",
                        spy: !0,
                        smooth: !0,
                        duration: 500,
                        offset: -63
                    }, r.a.createElement("button", {
                        className: "topButton " + (t ? "on" : "off"),
                        title: "Go to top"
                    }, r.a.createElement("i", {
                        "aria-hidden": "true"
                    }, r.a.createElement(ce.a, null))))
                };
            var oe = function() {
                return r.a.createElement("div", {
                    className: "App"
                }, r.a.createElement(N, null), r.a.createElement(y, null), r.a.createElement(j, null), r.a.createElement(_, null), r.a.createElement(ne, null), r.a.createElement(ie, null))
            };
            i.a.render(r.a.createElement(oe, null), document.getElementById("root"))
        },
        90: function(e, a) {
            e.exports = "data:image/png;base64,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"
        }
    },
    [
        [153, 1, 2]
    ]
]);
//# sourceMappingURL=main.9e92f248.chunk.js.map