import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Homepage" description="Butane Docs">
      <main>
        <br />
        <h1 align="center" style={{ fontWeight: '650' }}>Welcome to </h1>
        <div align="center">
          <img src="img/Group 1.png" alt="Butane Logo" width="800" height="800" style={{ margin: '20px 20px' }} />
          <h1 align="center" style={{ fontWeight: '950' }}>Docs</h1>
        </div>
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="./protocol/evmos-cli/single-node"
                header={{
                  label: "🚀 Launch Your Local Node",
                }}
                body={{
                  label:
                    "Getting started on Butane is simple and easy with a local node",
                }}
              />

              <Card
                to="./use"
                header={{
                  label: "☄️ Learn about Butane",
                }}
                body={{
                  label:
                    "Discover why $BBC is the flagship EVM on the Butane Ecosystem",
                }}
              />

              <Card
                to="./validate"
                header={{
                  label: "🤑 Become a Validator",
                }}
                body={{
                  label:
                    "Join Butane's Delegated Proof-of-Stake protocol to help secure the network and earn rewards",
                }}
              />

              <Card
                to="./develop/api"
                header={{
                  label: "💻 View Butane APIs",
                }}
                body={{
                  label:
                    "Access low-level protocol interfaces to build your custom dapp",
                }}
              />

              <Card
                to="./develop/smart-contracts"
                header={{
                  label: "🛠️ Launch dApp on Butane",
                }}
                body={{
                  label:
                    "Learn everything you need to deploy an EVM-compatible smart contract",
                }}
              />

              <Card
                to="./protocol/security"
                header={{
                  label: "🛡️ Security on Butane",
                }}
                body={{
                  label:
                    "Learn about our Security Policy",
                }}
              />

              <Card
                to="https://github.com/BUTANE-Smart-Chain"
                header={{
                  label: "🔋 Contribute to Butane",
                }}
                body={{
                  label:
                    "Contribute to the thriving ecosystem of Butane and its open-source initiatives",
                }}
              />

              <Card
                to="./develop/tools"
                header={{
                  label: "🏁 Butane Name Service (bns)",
                }}
                body={{
                  label:
                    "BNS could make all the difference in how we interact in the web3 world",
                }}
              />

              <Card
                to="./protocol/firefly"
                header={{
                  label: "📖 FireFly CLI",
                }}
                body={{
                  label:
                    "Learn how to use the FireFly CLI",
                }}
              />
        <div align="center">
          <img src="img/vali.jpg" alt="Butane Logo" max-width= "400" max-height="400" style={{ margin: '25px 0px' }} />
        </div>

            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home