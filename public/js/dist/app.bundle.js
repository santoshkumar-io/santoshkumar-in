webpackJsonp([0],[function(e,n){var t=function(e,n){var t=new XMLHttpRequest;return"withCredentials"in t?t.open(e,n,!0):"undefined"!=typeof XDomainRequest?(t=new XDomainRequest,t.open(e,n)):t=null,t.setRequestHeader("Authorization","Bearer 2bffc1e41fc380e94a8b7356a059fd682b74f7a87725997abaa26527e6da68559"),t}("get","https://api.medium.com/v1/me");t&&(t.onload=function(){},t.onreadystatechange=function(){console.log("me",t)},t.send())}],[0]);