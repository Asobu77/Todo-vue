<template>
    <header id="header">
        <h1>Menu Screen.</h1>
        <nav id="header-nav">
            <ul>
                <router-link tag="li" id="home-nav" to="/" exact><a>ホーム</a></router-link>
                <router-link tag="li" id="tode-nav" to="/todo" exact><a>Todoリスト</a></router-link>
                <router-link tag="li" id="sample1-nav" to="/sample1" exact><a>sample1</a></router-link>
                <router-link tag="li" id="sample2-nav" to="/sample2" exact><a>sample2</a></router-link>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
</style>
