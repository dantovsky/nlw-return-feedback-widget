# NLW Return

Aplicação Web
https://nextlevelweek.com/episodios/impulse/aula-1/edicao/8

# Vídeos

NLW Return – Mission Impulse: Stage 1/5
https://www.youtube.com/watch?v=dCb4nMEyH_4

NLW Return – Mission Impulse: Stage 2/5
https://www.youtube.com/watch?v=CbY7TA5y5aU

NLW Return – Mission Impulse: Stage 3/5
https://www.youtube.com/watch?v=bm2dnsPqcek

NLW Return – Mission Impulse: Stage 4/5
https://www.youtube.com/watch?v=p3rklgvqK4M

NLW Return – Mission Impulse: Stage 5/5
https://www.youtube.com/watch?v=YBp7UWyhe28

# Material complementar

## Aula 01

Design no Figma
https://www.figma.com/community/file/1102912516166573468/Feedback-Widget

## Aula 04

Assets
https://drive.google.com/drive/folders/1ce8At1cn03L4p0ZkqGEpuMcEdBONoMfc

Instalando Expo
https://efficient-sloth-d85.notion.site/Instalando-Expo-cc5bfac8f19a41e394889e885355f261

## Aula 05

Deploy NLW - Impulse
https://efficient-sloth-d85.notion.site/Deploy-NLW-Impulse-83c4b94a74094deb99d1aede12bb16ee

# Wallpapers

https://www.figma.com/community/file/1102708662148116818/Wallpapers---NLW-Return

# Dúvidas » Dircord

https://discord.com/channels/327861810768117763/969664217617661992

# Init da app

Instalação com vite:
```
npm create vite@latest

```
Escolher as opções:
- Framework: react
- Variant: react-ts (React com TypeScript)

# CSS » Tailwind

- https://tailwindcss.com/docs/installation/using-postcss
- https://tailwindcss.com/docs/guides/vite

Instalação:
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

# Icons

Instalação do Phosphor no React:
```
npm install phosphor-react
```

# Accessibility

Headless » mesma equipe do TailwindCSS
https://headlessui.dev
```
npm install @headlessui/react

```

# Estudos iniciais no App.tsx

```tsx
interface ButtonProps {
  text?: string;
}

function Button(props: ButtonProps) {
  return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'}</button>
}

function App() {
  return (
    <div className="flex gap-2">
      <h1>Hello World</h1>
      <Button text="Enviar" />
      <Button text="ok" />
      <Button text="Olá!"/>
      <Button />
    </div>
  )
}

export default App
```

# Implementações

## Popover

Code andes de instalar o Popover

```tsx
import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'

export function Widget() {

    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    function toggleWidgetVisibility() {
        setIsWidgetOpen(!isWidgetOpen)
    }

    return (
        <div className='absolute bottom-5  right-5'>
            {isWidgetOpen && <p>Hello World!</p>}

            <button onClick={toggleWidgetVisibility} className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    {/* <span className='pl-2'></span> */}
                    Feedback
                </span>
            </button>
        </div>
    )
}
```

Code utilizando o Headless » Popover

```tsx
import { ChatTeardropDots } from 'phosphor-react'
import { Popover } from '@headlessui/react'

export function Widget() {
    return (
        <Popover className='absolute bottom-5  right-5'>

            {/* Conteúdo que vai abrir e fechar */}
            <Popover.Panel>Hello World!</Popover.Panel>

            {/* Botão de ação */}
            <Popover.Button className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6' />

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'>
                    {/* <span className='pl-2'></span> */}
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}
```

# Possíveis erros

## Aula 03

https://efficient-sloth-d85.notion.site/Poss-veis-erros-ced2abadcd7640ad9d680d09c8c9f63b

**"The specified module could not be found...node_modules\prisma\query_engine-windows.dll.node"**

Esse já é um error apresentado nessa issue do Prisma: [https://github.com/prisma/prisma/issues/9975#issuecomment-952944479](https://github.com/prisma/prisma/issues/9975#issuecomment-952944479)

A solução apresentada é instalar/reinstalar o **Microsoft Visual C++ 2015 Redistributable**.

## Aula 04

https://efficient-sloth-d85.notion.site/Poss-veis-erros-cc3ac4c236734f67aec7b8fcc228521d

**O módulo 'Widget' não pode ser usado como component JSX.**

Segue os passos:

- Apaga a pasta `node_modules`
- Apaga o arquivo `package-lock.json`, se existir (cuidado, é o não **package.json**)
- Apaga o arquivo `yarn.lock`, se existir
- Instalar novamente os pacotes com `npm install`
- Por fim, realiza o reload do VSCode

**'AppLoading' cannot be used as a JSX component.**

Pode tentar importar o React no topo do arquivo:

```tsx
import React from 'react';
```

Pode tentar também mover o import do AppLoading para o topo.

E como última alternativa:

- Apagar a pasta `node_modules`
- Apagar o arquivo `package-lock.json` (cuidado, é o **package.json**)
- Executar `npm install`
- Reiniciar o VSCode

## Atualização do Expo 45

Caso esteja utilizando a SDK 45 do expo, tem algumas coisas que precisam ser feitas diferente.

Para conferir se está com a SDK 45, no arquivo `package.json`, procura por `expo`, se tiver o número **45**, está utilizando ela.

1 - A lib `expo-app-loading` a partir da SDK 45 foi depreciada, o Expo sugere utilizar a `expo-splash-screen`.

Execute:

```tsx
expo install expo-splash-screen
```

No arquivo `App.tsx` implemente [dessa forma](https://github.com/vinifraga/nlw-return-sdk45/blob/master/App.tsx#L12-L22).

2 - A lib `react-native-gesture-handler` precisa ser instalada na versão `2.1.0`, então utilize o comando:

```tsx
npm install react-native-gesture-handler@~2.1.0
```