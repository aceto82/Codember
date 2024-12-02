/*
import * as fs from "fs";

function reto4(): string {
    const fileName: string = "./2024/reto-4/network.txt";
    let fileContent = fs.readFileSync(fileName, "utf8");

    return checkNodo(JSON.parse(fileContent.trim())).join(",");
}

function checkNodo(nodos: string[][]): string[] {
    let resultado: string[][] = [];
    nodos.forEach((v, i) => {
        if (i == 0) {
            resultado.push(v);
        } else {
            let r: string[] = resultado[resultado.length - 1];
            if (r.at(r.length - 1) === v.at(0)) {
                r.push(v[1]);
            } else {
                resultado.push(v);
            }
        }
    });
    console.log(resultado);
    let filtrado: string[] = resultado.filter(v => v.length < 3).reduce((p, r) => [...p, ...r], []);
    return Array.from(new Set(filtrado.sort((a, b) => Number(a) - Number(b))));
}

console.log(checkNodo(JSON.parse("[[1, 2], [2, 3], [4, 5]]")).join(","));

console.log(checkNodo(JSON.parse("[[1, 2], [2, 3], [3, 4]]")).join(","));

console.log(checkNodo(JSON.parse("[[4, 6], [7, 9], [10, 12], [12, 16]]")).join(","));

console.log(reto4());
5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,155,156,157,158,175,176,177,178,179,180,181,182,183,184,195,196
*/

const fs = require('fs');

fs.readFile('./2024/reto-4/network.txt', 'utf8', (err, data) => {
	if (err) return console.error("Error reading the file:", err);

	const connections = JSON.parse(data);
	const graph = new Map();

	connections.forEach(([a, b]) => {
		graph.set(a, (graph.get(a) || []).concat(b));
		graph.set(b, (graph.get(b) || []).concat(a));
	});

	const visited = new Set();
	const safeNodes = [];

	const dfs = (node, component) => {
		if (!visited.has(node)) {
			visited.add(node);
			component.push(node);
			(graph.get(node) || []).forEach(neighbor => dfs(neighbor, component));
		}
	};

	graph.forEach((_, node) => {
		if (!visited.has(node)) {
			const component = [];
			dfs(node, component);
			if (component.length < 3) safeNodes.push(...component);
		}
	});

	console.log(safeNodes.sort((a, b) => a - b).join(','));
});

// submit 13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,155,156,157,158,175,176,177,178,179,180,181,182,183,184,195,196