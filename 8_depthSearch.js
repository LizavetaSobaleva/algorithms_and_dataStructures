const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']


function depthSearch(graph, start, end, visited = new Set()) {
    // Помечаем текущую вершину как посещенную
    visited.add(start);

    // Проверяем, является ли текущая вершина целевой
    if (start === end) {
        return true;
    }

    // Получаем список смежных вершин текущей вершины
    const neighbors = graph[start] || [];

    // Рекурсивно вызываем функцию для каждой смежной вершины
    for (const neighbor of neighbors) {
        // Если смежная вершина не посещалась, вызываем функцию рекурсивно
        if (!visited.has(neighbor)) {
            if (depthSearch(graph, neighbor, end, visited)) {
                return true;
            }
        }
    }

    // Если ни одна из смежных вершин не ведет к целевой, возвращаем false
    return false;
}

console.log(depthSearch(graph, 'a', 'g'))