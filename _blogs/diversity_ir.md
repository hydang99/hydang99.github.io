---
title: "Redefine “Diversity” in the era of LLMs in Information Retrieval/Recommendations System"
collection: blogs
permalink: /blogs/diversity_ir
date: 2024-06
---
## Table of Contents
- [1. Diversity in improving search result diversification](#1-diversity-in-improving-search-result-diversification)
  - [1.1. Diversity Definitions in Search Result Diversification](#11-diversity-definitions-in-search-result-diversification)
  - [1.2. Diversifying search results approaches](#12-diversifying-search-results-approaches)
  - [1.3 Diversity Metrics](#13-diversity-metrics)
- [2. “Additional” Diversity in Modern Retrieval/Recommendation System](#2-additional-diversity-in-modern-retrievalrecommendation-system)
- [3. Summary and Future Directions](#3-summary-and-future-directions)
- [Curated List of Papers](#curated-list-of-papers)

> 💡 Goals of this “Blog” is to initially propose some future directions in the fields of diversity in modern-IR/Recommendation systems based on some insights and analysis on related papers. Thus, another objective of this is to encourage research activity in this direction and enable opportunity for collaboration and discussion on next steps!

During my last previous research on retrieval problems, I gained an understanding of multi-aspect queries and their relevance to documents. This exploration led me to appreciate how "relevant" documents emerge from a plethora of diverse aspects and domains, introducing an interest in the concept of "Diversity" within Information Retrieval (IR) and Recommendation Systems—a direction I found quite fascinating.

While numerous surveys have focused on this domain, many are somewhat dated. However, they still provide a rich, compelling foundation to build upon. Notably, these resources do not cover approaches in modern IR systems, such as those in the Generative IR (Gen-IR) and Retrieval-Augmented Generation (RAG) era. With a passion for and commitment to both the fields of Large Language Models (LLM) and IR, my goal is to bridge these two domains. This endeavor aims to enhance our understanding and open new opportunity for **diversity in "modern retrieval."**

Traditionally, "diversity" in retrieval was synonymous with search result diversification, seeking to enrich the variety within retrieval or recommended lists. However, the groundbreaking era of LLMs has introduced the application of LLMs at various stages of the IR framework, offering fresh perspectives on "diversity" with an ambition to not only refine the effectiveness and relevance of modern IR systems but to move beyond result diversification.

Therefore, this blog is structured around two main themes: Diversity in enhancing search result diversification (traditionally defined within the scope of IR diversity) and "Additional" Diversity in Modern Retrieval/Recommendation Systems. In discussing various subsections or papers, I also share my insights, including analyses of strengths, weaknesses, and potential future directions.

# 1. Diversity in improving search result diversification

- We usually suffer from abundant of information, news, or knowledge (even with social media posts…). This can cause the situation of “information overload”. Thus, to address these issues, IR or Recommendations Systems have been the most important solution, which help to filter, retrieve relevant information from those sources. In more detail, the current approach of IR or Recommendations system will take users’ query as inputs and returns recommended information or items.
- Diversity in search results is essential for addressing the wide range of user queries that search engines encounter. It allows for effectively handling ambiguous queries by accommodating multiple possible user intents, offering a spectrum of relevant information. We can basically split these types into different types of queries.
    - For ***ambiguous query***, where it is difficult to depict users’ intent. For example, it we want to search for “Apple”, will we care about a “fruit” or a “company”, without a diverse search result, we may fall into a loophole of all results links on the first page just focus on either of them. Thus, result diversifications may help in this case when first providing you a diversified sets of retrieval with different domains or perspectives to give you a broad topics to start with first.
    - **For unambiguous but underspecified queries,** where the user's goals are unclear, diversity ensures that the search results cover a broad array of potential interests. For example, if we searched for “South Bend”, are we searching about geographical areas? or “Something to do at South Bend?” or even “If Notre Dame is in South Bend?” where each of these are different intents but all related to South Bend. Also, diversification in the recommendations can aid to capture multiple intents from users
    - Similarly, **multi-domain queries** benefit from diverse results that span across various fields, providing a comprehensive overview. **Information queries**, characterized by specific user expectations, also rely on diversity to present varied perspectives and sources since most of users’ expectation to search for a diverse information or knowledge. Overall, diversifying search results is crucial for enhancing user satisfaction, enabling a more personalized and enriched search experience that caters to the complex and varied nature of user searches.
    

    >  💡 To summarize these definitions, we can mention that diversifying the search result can be used to tackle most of these challenging types of queries. But overall, it aims to satisfy some main objectives including: Clarifying Ambiguous Queries, Capture Users’ Intents, Users’ Expectations.

    
- This section mainly focus on diversity in search result recommendations or retrievals with following sections of definitions, diversity evaluations, diversifying techniques. For each of these sections, I also include some of my thoughts including analysis or some insights regarding to each of them.

## 1.1. Diversity Definitions in Search Result Diversification

“Diversity” can depict different things in the expected list of recommendations. Luckily, there have been different definitions of search result diversification definitions introduced in the literature. However, in summary, they are usually categorized into 4 types of “diversity” definitions [Drosou et al.,2010]:

- **Content-based Definitions:** The goal of this content-based approach is to introduce the settings of diversity in term of distance between items, candidates in recommended lists. In more details, we want to have the minimum distance between any pair of chosen points or items are maximized.
- **Novelty-based definitions:** Its definition is closely match with diversity, where retrieved items should be diverse and recommended items should be different and diverse from the ones that have been seen in the past, however, a distinguishable point from these two terms are where novelty definition’s goal is to reduce ***redundancy*** instead of reducing ***ambiguity*** in diversity definition.
- **Coverage based Definitions:** These definitions rely on the assumption that user’s information need may cover different aspects and interpretations. Therefore, we can define a query q and different information categories, our objective is to retrieve a set of documents that can cover many intepretations of q. Many diversifying approaches have emphasize this definition to better capture users’ relevant information with the goal to improve recall. For example, multi-topic categorizations, clusterings, etc.
- **Serendipity Definition:** To me, this definition is interesting where it relies mostly on the definitions of ***surprise***. Some definitions of serendipity includes “surprisingly interesting item he might not have otherwise discovered”. Some defined “surprise” items includes items that a classifier is not certain about its relevance for specific users’ profile


> 💡 Although there are multiple definitions of diversity, there are still inconsistent or not clear use of these terms in research…

## 1.2. Diversifying search results approaches

There have been a widely well-rounded survey about some of diversifying approaches introduced in the paper [[Wu et al. 2022]](https://arxiv.org/abs/2212.14464). Therefore, my goal in this section is to introduce some additional approaches and provide some analysis on key characteristics of each of these approaches. To provide the consistent analysis, I inherit similar structures and taxonomy introduced in mentioned survey paper. Diversifying search result approaches can be categorized into 3 main themes includng pre-processing, in-processing and post-processing approaches. 

- **Pre-processing approaches:** Pre-processing methods intervene in the system before the model training.
    
    - One work that I found interesting in this section is in the sub-categories, pre-define sampling strategies, called [DGCN (Diversified Recommendation with Graph Convolutional Networks.](https://arxiv.org/abs/2108.06952), where the author introduces two sampling strategies in GNN-based recommendation systems to boost diversity: one re-balances neighborhood sampling to favor less popular items during message passing, and the other modifies negative sampling. These strategies counter the bias towards popular items, enhancing recommendation diversity by preventing the models to only recommending items within the same category, thus improving the coverage of the recommended list. Moreover, another term I found interesting when reading this paper is they additionally compare the accuracy-diversity ***dilemma tradeoff*** and show that their approach achieve much less tradeoff compare to other baselines. 
    - Additionally, recent work introduces **kNN-Embed (Locally Smoothed Embedding Mixtures For Multi-interest Candidate Retrieval**, a novel method to enhance diversity in the initial candidate retrieval phase of recommendation systems by representing users as a mixture of learned item clusters reflecting distinct interests. This approach, which diverges from the standard approximate nearest neighbor (ANN) search by aiming for a high-diversity set of candidates, demonstrates significant improvements in recall and diversity across three datasets. The idea of this paper is more focusing on diverse “intents” or “interests” of users for the motivations. 
    
    - With above papers, there are some learning insights that we can derive for future directions:
        - ✅ Clusterings are a useful approach to define distinct “interests” or “intents” of users and retrieving from diverse cluster can improving recall thus can better capture the correct item or candidate.
        - ✅ **Accuracy-Diversity Dilemma Tradeoff,** in most case, accuracy-diversity dilenma exists, where we have to tradeoff between relevancy to improve diversity in the recommended lists. Thus, the objectives in diversifying algorithms should be to minimize this trade-off to achieve both effective and useful performance.
        - 🚫 Although clusterings were used to represent multiple “interest” or “intent”, to me, it is difficult for explanability of this approach. In more details, how to understand “interest” of each clusters? how many “clusters” should be define and if the algorithms have detect all “interests?”
- **In-processing approaches** integrate diversity directly into the model training process, aiming to embed diversified characteristics from the ground up. To me, these approaches aim to emphasize “diversity” in “controlled” manner by treating diversity as score or terms for training. Thus, it can better control and guarantee the outcomes of the results.
    
    In this page, I also want to introduce some of the modern approaches, especially generative approaches (of course, in the era of LLMs), thus in this section, I will divide the topic into two main sub-themes: 
    
    - Traditional Training Approaches: I categorize traditional training approach such as incorporating diversity terms or scores into the training process including [Learning to Rank Recommender System [Wasilewski et al. 2016]](https://cdn.aaai.org/ocs/12944/12944-57702-1-PB.pdf) or [IDSR (intent-aware diversified sequential recommendation), Chen et al,. 2019.](https://deepai.org/publication/improving-end-to-end-sequential-recommendations-with-intent-aware-diversification) Interestingly, as I walked through this topic, it turned out that another benefits of diversity in search result diversifications is not only limited to diverse in result diversifications but also in the diversity in explanations,
        - [[Balloccu, 2022]](https://dl.acm.org/doi/pdf/10.1145/3477495.3532041) aims to provide some properties to train the model quality with the focus on explanations of recommendation models utilizing the knowledge graph, one of them includes diversity of the explanation type of recommended candidate or product and even reduce the unfairness in some experimented datasets.
        - Another similar work focusing on diverse explanation is [[DESR](https://cis.temple.edu/~jiewu/research/publications/Publication_files/jiang_www_2020.pdf)], or diverse explanations in serendipity, with the proposals of serendipity vector to combine long-term preferences with short-term demands and generate serendipitous recommendations.
    - Generative Approaches: As mentioned above, it is worth mentioning some of the paper utilizing generative approaches, which show a promising and potential direction for the field of diversifying the approaches comparing to long-term implementation of greedy or algorithms based diversifications.
        - The most recent paper [(TIGER), Rajput et al,. 2023](https://proceedings.neurips.cc/paper_files/paper/2023/file/20dcab0f14046a5c6b02b61da9f13229-Paper-Conference.pdf), presents an innovative generative retrieval method for recommender systems, utilizing a Transformer-based model to auto-regressively decode Semantic IDs of items, leading to significant improvements over state-of-the-art models. By incorporating semantically meaningful codewords as item identifiers, the system achieves enhanced retrieval performance and generalization, especially for items lacking prior interactions. This paper shows additional effect of result diversification.
        - Additional works focus on this area is [IntentT5](https://arxiv.org/abs/2108.04026), This research explores the use of causal language models, specifically the Text-To-Text Transformer (T5), to generate diverse potential query intents for search result diversification, addressing the challenge of underspecified queries. By introducing a novel Distributional Causal Language Modeling (DCLM) objective during fine-tuning and employing a representation replacement strategy during inference, the proposed IntenT5 method enhances search result diversity.
        - Another streams lines of work including the query augmentation approaches, with the goals of producing diverse queries from the original one, with the goal to improve diversity in the search recommendation using Language Models. To me, this approach is quite interesting since the recent RAG framework also have a component of query rewriting. However, in this section, I mainly introduce some approaches focusing on query augmentations and achieve result diversifications.
            - [GPT4REC](https://arxiv.org/abs/2304.03879) tries to provide diversified recommendations approaches by augmenting the query at the beginning by combining GPT2 with beam search to provide multiple queries and through retrieval approaches, it will have more diversified results.
            - In additional, [Diversity driven Query Rewriting in Search Advertising CLOVER](https://arxiv.org/abs/2106.03816), a novel framework designed to overcome the limitations of current generative retrieval models in targeted search advertising, specifically in generating query rewrites with low lexical diversity and misaligned training objectives. By leveraging a diversity-driven reinforcement learning algorithm and optimizing for human assessment of rewrite quality, CLOVER generates high-quality and diverse rewrites. The effectiveness of CLOVER is demonstrated through offline experiments across major languages and online A/B testing on Bing, showing significant improvements in user engagement, defect reduction, and revenue increase.
    - With above approaches, there are some learning insights that we can derive for future directions:
        - 🚫 Although showing effectiveness in both objectives of diversity and relevancy, some in-processing approaches requires complex training or fine-tuning and most of the approaches is lack of generalizable abilities
        - ✅ Query augmentations approaches are widely used and approached to enhance the diversity perspective in better capturing users intents, in later section, I will introduce this part more in detail.
        - ✅ Generative Models can be used in enhancing diversity by generating intents of users, which aids to the recommendation or retrieval results.
        - 🚫 Although showing effectiveness in both objectives of diversity and relevancy, it additionally requires training procedure to generate queries that satisfy some characteristics.
        - 📡 With the implementation of RAG systems and GenIR, query augmentations utilize generalizable LLM approaches with contexts provide is an interesting direction can be to study how different queries generations can be used to enhance the diversity
        - 📡 Diverse explanations are necessary and important future directions, although [[DESR](https://cis.temple.edu/~jiewu/research/publications/Publication_files/jiang_www_2020.pdf)] or [[Balloccu, 2022]](https://dl.acm.org/doi/pdf/10.1145/3477495.3532041) utilized model performance and feature representations to diversify the explanation, which is different in modern IR approaches when natural language is implemented widely and studied, the ideas of diverse explanations remains constantly important, especially in the era of LLM and RAG systems, where diverse explanations not only can yield better diversified results but also provide explanability, reasonings, thus providing trusthworthy system.
- **Post-processing methods:**
    - **Algorithms-Based:**
        - Additionally approach to improve and encourage the diversity in search recommendation result is to reranking the initially retrieved set to better satisfy some diversity measurements. Traditional approaches usually implement greedy algorithms based on some diversity score (MMR, or DPP, [Simpson’s Diversity Index](https://dl.acm.org/doi/abs/10.1145/3340531.3412163) or sub-queries construction generations approach (xQuAD, and HxQUAD). However, using the greedy traditional approaches usually suffers from computational resources and require lots of efforts to acquire item features to measure the score. It is quite interesting to me that there is not much reranking approach based on neural approaches to impose diversity in the retrievals or recommendations.
    - **Generative-Model-Based:**
        - To address mentioned challenges, the most recent paper propose utilize LLM as rerankers by perform zero-shot prompting [[Carraro et al,. 2024]](https://arxiv.org/pdf/2401.11506v1.pdf). They argue that LLM utilizes effectively the implicit knowledge to perform the tasks without any explicitly item features. Although not performing very well compare to traditional re-rankers, it can be base on zero-shot prompting approaches were implemented in the experiments. The authors also observes the inconsistency in the outputs, or generated items that do not exists. These can be a future direction to enforce the consistency in diversified ranking using LLM.
    - With above approaches, there are some learning insights that we can derive for future directions:
        - ✅ Algorithms-based recommended results are valid, which enable explanability process when returning the recomended lists
        - 🚫 However, the Algorithms-Based approach suffers from computational resources and require lots of efforts to acquire item features to measure the score.
        - ✅ Generative-Model-Based or LLM can address above issue when explicitly item features are not required.
        - 🚫 However, the current Generative-Model-Based or LLM suffers from lack of explainability in the process. Moreover, the proposed approach solely relying on the instruction and zero-shot prompting techniques to make the recommendation.
        - 📡 With the evolution of LLM or LLM-based IR systems, the current research directions are more focusing on improving generations, retrieval accuracy of those IR components. However, the diversity perspectives in LLM-based generations have not been addressed widely in research community. I believe that utilizing LLM as a reranker is an interesting approach and suitable for implementation in modern IR systems where LLM has been used as reranking techniques. Thus, a direction can be exploited to improve the diversity characteristics that can enhance current LLM-diversity-rerankers based.

## 1.3 Diversity **Metrics**

There have been many diversity metrics have been introduced and implemented to evaluate methods in both search and recommendation domains. However, all of these metrics aim to evaluate the dissimilarity and non-redundancy among a list of items. [[Zheng et al,. 2017]](https://link.springer.com/article/10.1007/s10115-016-0990-4) provides a great comprehensive collection of metrics so many parts of this sections are adopted in the paper.

- **Distance-based metrics:** According to my knowledge, this is one of the most common ways to calculate the diversity in the lists due to its simplicity and effectiveness, where ****its goals is to measure diversity based on distance among items. Its objective is simple due to the lower score in these metric, the less diversity among items in the set. Almost all of the algorithms adopts these techniques focus on IL and ILM, which are intra-list average and intra-list minimal, ILALD and ILMLD.
    - **Intra-List Similarity (ILS)** [[Paper](https://dl.acm.org/doi/abs/10.1145/1060745.1060754)] - The idea of intra-list similarity is to compare pairwise similarity among items in the lists defined by any distance measure. Some of the distance measure can be Cosine Diversity Distance, which is a most common approach to define the pair-wise distance between 2 item representations, jaccard diversity distance, etc.
        
        To give an example of how it is calculated, assuming the simplest case when we have 3 items (C1, C2, C3) in recommended list and similarity between them can be hypothesized:
        
        - Similarity between *Candidate 1* and *Candidate 2*: 0.7
        - Similarity between *Candidate 1* and *Candidate 3:* 0.3
        - Similarity between *Candidate 2* and *Candidate 3:* 0.5

            <img src="diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_2.08.01_PM.png" width="35%">
            <!-- ![Screenshot 2024-03-14 at 2.08.01 PM.png](diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_2.08.01_PM.png) -->
            
- **Coverage-based metrics:**  As mentioned in previous section, research also define diversity as coverage-level, where trying to evaluate if the recommended items could cover a variety of ***subtopics**,* in this sections, we focus on metrics that are commonly used and could be applied in modern models or approaches in both search and recommendations
    - C-Coverage: Its goal is to evaluate the whole systems instead of single evaluation of specific recommendations. It calculates the proportion of unique items recommended in the system.
    - S-Coverage (Genre Coverage, Subtopic Coverage): This metric is a common measurement and evaluation in diversity. Its goal is to measure how much subtopics and diverse subtopics that a recommendation can covers.
- **Novelty-based metrics:** The objective of these types of metrics including if the models have abilities to recommend “new” items / candidates in the list. Some of the metrics include alpha-nDCG@K, NRBP, and Intent-Aware Metrics.
    - **For these types of metrics, for better representations, I will provide some examples and calculations of these metrics. For consistent explanations, I will use the same example for all the metrics where we have:**
        - Given Items in the list: (C1, C2, C3, C4) with the relevant scores are (0,1,2,1), respectively.
        - Let me assume a scenario of recommended list is: C3 → C2 → C1 → C4, where C3 ranks the highest and C4 ranks the lowest in the list
        - Since we have to evaluate the “novelty”, we also need to hypothesize novelty score for these items:
            - Novelty for C3: 1.0 (completely novel)
            - Novelty for C2: 0.8 (somewhat novel, slightly similar to item 3)
            - Novelty for C1: 0 (not novel)
            - Novelty for C4: 0.5 (moderately novel, shares similarities with items 2 and 3)
    - **alpha-nDCG@K** (Novelty-biased Normalized Discounted Cumulative Gain @K) [[Paper](https://dl.acm.org/doi/abs/10.1145/1390334.1390446)]. This metric aims to evaluate both relevant and non-redundant item, which is also first attempt to incorporate both relevance and diversity into one metric.

    <img src="diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_2.07.50_PM.png" width="70%">
    <!-- ![Screenshot 2024-03-14 at 2.07.50 PM.png](diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_2.07.50_PM.png) -->
    
    - **NRBP (NRBP) (Novelty- and Rank-Biased Precision) [[Paper](https://link.springer.com/chapter/10.1007/978-3-642-04417-5_17)]**
        
        <img src="diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_2.07.55_PM.png" width="70%">
        

- **Intent-aware metrics:**
    - Above metrics aim to diversify the search result to focus of giving diverse information to users. However, one of the objectives introduced earlier is to better capture users intents. Thus, to fulfill this requirement, there are also metrics that try to measure if list of recommendations both satisfy users’ expectations over diverse set of recommendation lists.
    - M-IA metrics [[Paper](https://dl.acm.org/doi/abs/10.1145/1498759.1498766)]
        - For these calculation, they assume user may have different intents. Thus, to calculate Intent-Aware of users using different metrics (nDCG, MRR, MAP). We just need to calculate the recommended results for each intent then perform the final calculations as “average” the scores of all the intents with weights for each intent score to depict the distribution and “important” of each intents

# 2. “Additional” Diversity in Modern Retrieval/Recommendation System

With the revolutionary era of LLM, there have been the implementation of LLM in different stages of IR framework, especially the introduction of RAG system. According to, it is significant to me that LLM have been or (can be) implemented in any stages of the IR system.
<img src="diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_12.06.04_PM.png" width="70%">

Zhu et al. 2024., Figure of applications of LLMs in different components of modern IR systems. It has been shown that LLMs have been applied to every components of IR systems

In the current stage, not lots of proposed approaches directly related to diversification in search retrieval/recommendation as introduced in previous sections, but I argue that many proposed approaches also consider some characteristics of “diversity” with the goal to improve even only the effectiveness and relevancy of modern IR system. 

In this structure, I included some papers that utilize “diversity” in their proposed techniques and methods. This sections are divided by different components of modern IR systems. 

### **Rewriter (effective retriever + diversified result + capture users intent)**

Complex or Ambiguous Queries can contains multiple aspects but vanila RAG systems usually rely on the same sets of retrieved contexts to generate the answers. Thus, these papers propose techniques that how “diversity” can help in this domain. All of the below papers refer to techniques of diversifying the queries using different approaches, which the goal of better capturing the intents of users or decompose complex queries. Thus, these steps can aid to the retrievals models to search for diverse and enough evidence to give the final results. 

1. **Generative Relevance Feedback with Large Language Models**, *Mackie et al.*, SIGIR 2023 (short paper). [[Paper](https://arxiv.org/pdf/2304.13157.pdf)] -  Peudo-relevance feedback (PRF) methods, which can falter with non-relevant initial results. GRF innovatively utilizes Large Language Models (LLMs) to generate long-form text for creating probabilistic feedback models, exploring various zero-shot generation subtasks like queries, entities, facts, and more. This approach considers the diversity on prompting approaches since they show that combinations of all prompting methods can better capture users’ intent.
    - ✅ Diversity in prompting approaches especially (Summary, Fact, Document, Essay, News) improve the retrieval models compares to Queries, Keywords or Entities even with CoT):
    - 🚫 Since it focus on generating summary, fact, document, or long text, there will be more prone to hallucinations or unverified facts introduced in to expansions.
2. **GRM: Generative Relevance Modeling Using Relevance-Aware Sample Estimation for Document Retrieval**, *Mackie et al.*, arXiv 2023. [[Paper](https://arxiv.org/pdf/2306.09938.pdf)] - To tackle some of above paper of limitations parts, where lots of irrelevant information is introduced in the system. The current paper (with the same author) introduces Generative Relevance Modeling (GRM), a technique to enhance query expansion effectiveness by filtering out irrelevant information generated by Large Language Models (LLMs). GRM leverages Relevance-Aware Sample Estimation (RASE) to more accurately weight expansion terms, using a neural re-ranker to assess the relevance of documents similar to those generated. Testing on three document ranking benchmarks, GRM demonstrated improvements in both Mean Average Precision (MAP) and Recall (R@1k), outperforming existing methods. This approach first to extract potential subtopics from queries and use that to generate diverse documentations/aspects for that queries.
    - ✅ Although not focusing on result diversifications, the models aims to generate subtopics and to aggregate the retrieved document, with show the potential of utilizing LLMs to generate subtopics.
    - ✅ To address previous hallucinations in generation contents that can harm retrieval effectiveness → They propose RASE (relevance-aware sample estimation for more accurate weighting, with the aim of utilizing a score to identifying the relevancy of retrieved documents to the query (filtering process)

<img src="diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_12.26.17_PM.png" width="70%">


1. **Agent4Ranking**: Semantic Robust Ranking via Personalized Query Rewriting Using Multi-agent LLM. This is an interesting approaches to utilize an emerging fields of simulations in LLMs, for this steps, the goal is to improve the personalizing objectives when the model aims to generate diverse queries that tackle different user types and diverse population. 

<img src="diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_12.32.26_PM.png" width="85%">


<img src="diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_12.31.55_PM.png" width="85%">


- ✅ Simulations approaches to create different personas can be an interacting approaches with the aim to diversify the results, this approach can enhance both the fairness and personalizations of recommendations models.

### **Retriever**

For retriever steps, most of below papers focus on diversity in data types where the first paper introduce the diverse representations can improve the text retrieval. Meanwhile, the second paper utilize the combination of text and graphs information to improve the search relevancing specializing in e-commerce domains. 

1. **Sparse, Dense, and Attentional Representations for Text Retrieval,** (Luan et al, 2021)[[Paper](https://aclanthology.org/2021.tacl-1.20.pdf)] - The study proposes a novel neural model that aims to combine the efficiency of dual encoders with the expressive power of more complex attentional architectures. Additionally, the exploration of sparse-dense hybrid models seeks to leverage the precision of sparse retrieval methods. The outcomes suggest these innovative approaches surpass strong existing alternatives in large-scale retrieval scenarios, offering new directions for enhancing retrieval performance through a combination of techniques from both dense and sparse retrieval paradigms.
2. **An Interpretable Ensemble of Graph and Language Models for Improving Search Relevance in E-Commerce**, Choudhary et al,. 2024. [[Paper](https://arxiv.org/abs/2403.00923)] - The paper discusses the complexity of ensuring search relevance in e-commerce, highlighting the difficulty in aligning user queries with suitable products due to **nuanced queries**. Traditional methods like language models and graph neural networks struggle with the rapid pace of technological advancements, making practical application challenging. This is compounded by issues of model generalizability, experimentation costs, and a lack of interpretability. The proposed solution, Plug and Play Graph Language Model (PP-GLAM), addresses these challenges by offering an explainable, modular framework that improves search relevance through an ensemble of models. It enhances diversity in search results by integrating different signals and models, ensuring broad coverage of user intents and product relationships. PP-GLAM outperforms existing models on complex, real-world e-commerce datasets
    
    <img src="diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_1.54.59_PM.png" width="100%">

    
- ✅ Diversity in representations, features can be an interesting approaches, especially the graph information. Even with diversification in search result topics, many research also utilize the graph data to understand items interaction or explanations for recommendations.

### **Reranker**

Most existing work utilizing LLM as reranker confirm the validity of LLM to rerank the sets. However, most of these approaches only focus on relevancy instead of diversity in recommendation. 

1. **Enhancing Recommendation Diversity by Re-ranking with Large Language Models** [[Paper](https://arxiv.org/pdf/2401.11506v1.pdf)] - This paper utilize LLM for reranking process to evaluate the diversity in the recommendations and show that LLM-based re-ranking does not perform well as the traditional re-ranking approaches. The prompt design implications from this paper are to prompt for diversity instead of balancing diversity and relevance.
    - ✅ Generative-Model-Based or LLM can address above issue when explicitly item features are not required.
    - 🚫 However, the current Generative-Model-Based or LLM suffers from lack of explainability in the process. Moreover, the proposed approach solely relying on the instruction and zero-shot prompting techniques to make the recommendation.
    - 📡 With the evolution of LLM or LLM-based IR systems, the current research directions are more focusing on improving generations, retrieval accuracy of those IR components. However, the diversity perspectives in LLM-based generations have not been addressed widely in research community. I believe that utilizing LLM as a reranker is an interesting approach and suitable for implementation in modern IR systems where LLM has been used as reranking techniques. Thus, a direction can be exploited to improve the diversity characteristics that can enhance current LLM-diversity-rerankers based.

### **Diversity-Retrieved-Aid in Generations**

Since below research bring interesting approaches to incorporate “diversity” into different perspectives of RAG systems, they do not just focus on one component, thus I put all of these paper in this sections to highlight their approaches. As mentioned above in previous sections, there are some challenges related to RAG systems especially in how the generations/reader models process these diverse contexts, where the contexts may contain irrelevant information, misinformation. 

1. To filter the irrelevant in the retrieval results, **REAR: A Relevance-Aware Retrieval-Augmented Framework for Open-Domain Question Answering,** (Wang et al., 2023) [[Paper](https://arxiv.org/pdf/2402.17497.pdf)] -, a novel approach enhancing Large Language Models' (LLMs) effectiveness in open-domain QA by improving their ability to discern and utilize relevant external knowledge within Retrieval-Augmented Generation (RAG) systems. By integrating a specially designed rank head for accurate relevance assessment and employing advanced training methods, REAR significantly outperforms existing RAG models in open-domain QA tasks. Access to the code and data is provided for further exploration. This approach consider different granularities of relevance  allow it to look at different levels, thus can include a “diverse” or broad range of information to be deemed relevant and included in the final response.
    
    <img src="diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-14_at_12.34.25_PM.png" width="100%">
    
2. Additionally challenge in RAG system is the intepretability of the system and reasoning, which also happen in search result diversification domain. To address this, Diverse in prompts ReACT - ReAct, an innovative approach utilizing large language models, integrates reasoning and action to improve decision-making and information retrieval tasks. By intertwining reasoning traces with actionable steps, it dynamically updates action plans and interfaces with external sources, significantly enhancing task performance and interpretability. Demonstrating superior results on benchmarks like HotpotQA and Fever, and outperforming existing learning methods in interactive scenarios, ReAct showcases a marked improvement in accuracy, interpretability, and trustworthiness in complex language and decision-making tasks.
3. Finally, the AutoCoT : AUTOMATIC CHAIN OF THOUGHT PROMPTING IN LARGE LANGUAGE MODELS paper presents interesting approach of how **diversity** in demonstration can aid to the reasoning steps. This approach performs similar approaches as other diversity-construction by clusterings.
    
    <img src="diversity_ir/Redefine%20%E2%80%9CDiversity%E2%80%9D%20in%20the%20era%20of%20LLMs%20in%20Informa%20ec3bbe96d3d240a081240bff07d91146/Screenshot_2024-03-27_at_8.45.57_PM.png" width="100%">

# 3. Summary and Future Directions
Through some of my analysis on current trends and approaches, I believe that these mentioned directions (📡) can further improve the strengths (✅) and weaknesses (🚫) of current and existing approaches

**Search Result Diversification:** 
- ✅ Accuracy-Diversity Dilemma Tradeoff, in most case, accuracy-diversity dilenma exists, where we have to tradeoff between relevancy to improve diversity in the recommended lists. Thus, the objectives in diversifying algorithms should be to minimize this trade-off to achieve both effective and useful performance.
- **Query Augmentations**:
    - ✅ Query augmentations approaches are widely used and approached to enhance the diversity perspective in better capturing users intents, in later section, I will introduce this part more in detail.
    - ✅ Generative Models can be used in enhancing diversity by generating intents of users, which aids to the recommendation or retrieval results.
    - 🚫 Although showing effectiveness in both objectives of diversity and relevancy, it additionally requires training procedure to generate queries that satisfy some characteristics.
    - ✅ LLMs can be used to generate subtopics and to aggregate the retrieved document
    - 📡 **Query Rewritings** With the implementation of RAG systems and GenIR, query augmentations utilize generalizable LLM approaches with contexts provide is an interesting direction can be to study how different queries generations can be used to enhance the diversity
- **Rerankers:**
    - 📡 **LLM as diversity rerankers** With the evolution of LLM or LLM-based IR systems, the current research directions are more focusing on improving generations, retrieval accuracy of those IR components. However, the diversity perspectives in LLM-based generations have not been addressed widely in research community. I believe that utilizing LLM as a reranker is an interesting approach and suitable for implementation in modern IR systems where LLM has been used as reranking techniques. Thus, a direction can be exploited to improve the diversity characteristics that can enhance current LLM-diversity-rerankers based. (LLM as diversity rerankers?)

**Fact-Checking:** 

However, since the development of LLM in IR systems there are some potential posing challenges regardings to retrieve diverse contexts/evidence for generations or even. The widely acknowledged problems mentioned in the implementations of LLMs in these components are hallucinations and facts-verification issues. 

In more details, introduced diverse contexts may post conflicts in facts or even introduce irrelevant information into the generations model. 

A recent survey [Xu et al., 2024](https://arxiv.org/html/2403.08319v1) has detail informations about different types of conflicts in LLMs generation including parametric and non-parametric knowledge, conflict in the contexts, conflict in the LLM generations. The survey paper also include diverse types of solutions that can aid… Thus, I highly recommend to check this paper out! 

- ✅ Diversity in prompting approaches especially (Summary, Fact, Document, Essay, News) improve the retrieval models compares to Queries, Keywords or Entities even with CoT):
- 🚫 Since it focus on generating summary, fact, document, or long text, there will be more prone to hallucinations or unverified facts introduced in to expansions.
- 📡 **Inconsistency in Diverse Context:** RAG system rely significantly on the retrieved steps to improve the generation answers at the end. However, lack of research focusing on analyzing diversity in the retrieved contexts. However, lots of retrieved contexts are based on models solely emphasize on relevancy. Thus, a future directions can be how diversity in the context can aid to the system, it can further developing as if diversified contexts can improve the RAG performance, however, diverse contexts may post different challenges of **inconsistency, introduction of many irrelevant information**. Thus, how can we mitigate that and effectively use it is an interesting direction.

**Transparency and explainability:**

- 🚫 **Diversity in “explanations”.** Current approaches usually rely mainly on black-box LLM and assume the explanations from these LLM models are helpful for even rewriters and generation steps. However, it may propose challenges of hallucinations and inconsistency in those explanations.
- 📡 **Diverse explanations** can be an interesting approach due to its effectiveness in the case of retrieval search diversification. Moreover, we believe the **diverse explanations** from multiple aspects and perspective can aid on this steps before generate and construct the final answer.

# Curated List of Papers:

1. **Diversity in improving search result diversification** 
    - **Definitions & Survey of Search Result Diversification in IR:**
        - Drosou, Marina, and Evaggelia Pitoura. "Search result diversification." *ACM SIGMOD Record* 39, no. 1 (2010): 41-47.
        - Ge, Mouzhi, Carla Delgado-Battenfeld, and Dietmar Jannach. "Beyond accuracy: evaluating recommender systems by coverage and serendipity." In *Proceedings of the fourth ACM conference on Recommender systems*, pp. 257-260. 2010.
        - Kaminskas, Marius, and Derek Bridge. "Diversity, serendipity, novelty, and coverage: a survey and empirical analysis of beyond-accuracy objectives in recommender systems." *ACM Transactions on Interactive Intelligent Systems (TiiS)* 7, no. 1 (2016): 1-42.
        - Zheng, Kaiping, Hongzhi Wang, Zhixin Qi, Jianzhong Li, and Hong Gao. "A survey of query result diversification." *Knowledge and Information Systems* 51 (2017): 1-36.
    - **Diversifying search results approaches**
        - **Pre-processing approaches**
            1. Zheng, Yu, Chen Gao, Liang Chen, Depeng Jin, and Yong Li. "DGCN: Diversified recommendation with graph convolutional networks." In *Proceedings of the Web Conference 2021*, pp. 401-412. 2021. [[Paper]](https://dl.acm.org/doi/abs/10.1145/3442381.3449835?casa_token=xuQgYMIml2YAAAAA:lB4pWopdNxiCutjFHtxI3DfICg4KpWB4Hl-qFKHUDF0kEvKB9Ws3aKuA7zpZfdRG80g3g8TUxJA1LTk)
            2. El-Kishky, Ahmed, Thomas Markovich, Kenny Leung, Frank Portman, Aria Haghighi, and Ying Xiao. "k NN-Embed: Locally Smoothed Embedding Mixtures for Multi-interest Candidate Retrieval." In *Pacific-Asia Conference on Knowledge Discovery and Data Mining*, pp. 374-386. Cham: Springer Nature Switzerland, 2023. [[Paper]](https://arxiv.org/abs/2205.06205)
        - **In-processing approaches**
            1. Wasilewski, Jacek, and Neil Hurley. "Incorporating diversity in a learning to rank recommender system." In *The twenty-ninth international flairs conference*. 2016. [[Paper]](https://cdn.aaai.org/ocs/12944/12944-57702-1-PB.pdf)
            2. Chen, Wanyu, Pengjie Ren, Fei Cai, Fei Sun, and Maarten de Rijke. "Improving end-to-end sequential recommendations with intent-aware diversification." In *Proceedings of the 29th ACM international conference on information & knowledge management*, pp. 175-184. 2020. [[Paper]](https://deepai.org/publication/improving-end-to-end-sequential-recommendations-with-intent-aware-diversification)
            3. Balloccu, Giacomo, Ludovico Boratto, Gianni Fenu, and Mirko Marras. "Post processing recommender systems with knowledge graphs for recency, popularity, and diversity of explanations." In *Proceedings of the 45th International ACM SIGIR Conference on Research and Development in Information Retrieval*, pp. 646-656. 2022. [[Paper]](https://dl.acm.org/doi/pdf/10.1145/3477495.3532041)
            4. Li, Xueqi, Wenjun Jiang, Weiguang Chen, Jie Wu, Guojun Wang, and Kenli Li. "Directional and explainable serendipity recommendation." In *Proceedings of The Web Conference 2020*, pp. 122-132. 2020. [[Paper]](https://cis.temple.edu/~jiewu/research/publications/Publication_files/jiang_www_2020.pdf)
            5. Rajput, Shashank, Nikhil Mehta, Anima Singh, Raghunandan Hulikal Keshavan, Trung Vu, Lukasz Heldt, Lichan Hong et al. "Recommender systems with generative retrieval." *Advances in Neural Information Processing Systems* 36 (2024). [[Paper]](https://proceedings.neurips.cc/paper_files/paper/2023/file/20dcab0f14046a5c6b02b61da9f13229-Paper-Conference.pdf)
            6. MacAvaney, Sean, Craig Macdonald, Roderick Murray-Smith, and Iadh Ounis. "Intent5: Search result diversification using causal language models." *arXiv preprint arXiv:2108.04026* (2021). [[Paper]](https://arxiv.org/abs/2108.04026)
            7. Li, Jinming, Wentao Zhang, Tian Wang, Guanglei Xiong, Alan Lu, and Gerard Medioni. "GPT4Rec: A generative framework for personalized recommendation and user interests interpretation." *arXiv preprint arXiv:2304.03879* (2023). ****[[Paper]](https://arxiv.org/abs/2304.03879)
            8. Mohankumar, Akash Kumar, Nikit Begwani, and Amit Singh. "Diversity driven query rewriting in search advertising." In *Proceedings of the 27th ACM SIGKDD Conference on Knowledge Discovery & Data Mining*, pp. 3423-3431. 2021. [[Paper]](https://arxiv.org/abs/2106.03816)
        - **Post-processing approaches**
            1. Carbonell, Jaime, and Jade Goldstein. "The use of MMR, diversity-based reranking for reordering documents and producing summaries." In *Proceedings of the 21st annual international ACM SIGIR conference on Research and development in information retrieval*, pp. 335-336. 1998. [[Paper]](https://dl.acm.org/doi/10.1145/3130348.3130369)
            2. Chen, Laming, Guoxin Zhang, and Eric Zhou. "Fast greedy map inference for determinantal point process to improve recommendation diversity." *Advances in Neural Information Processing Systems* 31 (2018). [[Paper]](https://papers.nips.cc/paper_files/paper/2018/file/dbbf603ff0e99629dda5d75b6f75f966-Paper.pdf)
            3. Santos, Rodrygo LT, Craig Macdonald, and Iadh Ounis. "Exploiting query reformulations for web search result diversification." In *Proceedings of the 19th international conference on World wide web*, pp. 881-890. 2010. [[Paper]](https://dl.acm.org/doi/abs/10.1145/1772690.1772780?casa_token=a_nk05fo6m0AAAAA:qQ6qENsGUsGsdSbP0UHxy0m20jfVUqazyXNJPH1v1pJKX4wtzg6R0FG73oy_o4_1e9B7qOoByeB8Oxs)
            4. Hu, Sha, Zhicheng Dou, Xiaojie Wang, Tetsuya Sakai, and Ji-Rong Wen. "Search result diversification based on hierarchical intents." In *Proceedings of the 24th ACM international on conference on information and knowledge management*, pp. 63-72. 2015. [[Paper]](https://dl.acm.org/doi/abs/10.1145/2806416.2806455?casa_token=SnVwBc3sTaIAAAAA:oO0phF_FK_2MxmR4kBXjlwhIIXYi2LspWUe1a71sC6i2T9AgYeFpyri7_TSRr94TAGozFUJZObcgzDI)
            5. Zhou, Jianghong, Eugene Agichtein, and Surya Kallumadi. "Diversifying multi-aspect search results using Simpson's diversity index." In *Proceedings of the 29th ACM International Conference on Information & Knowledge Management*, pp. 2345-2348. 2020. [[Paper]](https://dl.acm.org/doi/abs/10.1145/3340531.3412163)
            6. Carraro, Diego, and Derek Bridge. "Enhancing Recommendation Diversity by Re-ranking with Large Language Models." *arXiv preprint arXiv:2401.11506* (2024). [[Paper]](https://arxiv.org/pdf/2401.11506v1.pdf)
    - **Diversity Metrics**
        1. Ziegler, Cai-Nicolas, Sean M. McNee, Joseph A. Konstan, and Georg Lausen. "Improving recommendation lists through topic diversification." In *Proceedings of the 14th international conference on World Wide Web*, pp. 22-32. 2005.
        2. Yu, Cong, Laks Lakshmanan, and Sihem Amer-Yahia. "It takes variety to make a world: diversification in recommender systems." In *Proceedings of the 12th international conference on extending database technology: Advances in database technology*, pp. 368-378. 2009.
        3. Clarke, Charles LA, Maheedhar Kolla, Gordon V. Cormack, Olga Vechtomova, Azin Ashkan, Stefan Büttcher, and Ian MacKinnon. "Novelty and diversity in information retrieval evaluation." In *Proceedings of the 31st annual international ACM SIGIR conference on Research and development in information retrieval*, pp. 659-666. 2008.
        4. Clarke, Charles LA, Maheedhar Kolla, and Olga Vechtomova. "An effectiveness measure for ambiguous and underspecified queries." In *Advances in Information Retrieval Theory: Second International Conference on the Theory of Information Retrieval, ICTIR 2009 Cambridge, UK, September 10-12, 2009 Proceedings 2*, pp. 188-199. Springer Berlin Heidelberg, 2009.
        5. Yang, Yiming, Abhimanyu Lad, Ni Lao, Abhay Harpale, Bryan Kisiel, and Monica Rogati. "Utility-based information distillation over temporally sequenced documents." In *Proceedings of the 30th annual international ACM SIGIR conference on Research and development in information retrieval*, pp. 31-38. 2007.
        6. Agrawal, Rakesh, Sreenivas Gollapudi, Alan Halverson, and Samuel Ieong. "Diversifying search results." In *Proceedings of the second ACM international conference on web search and data mining*, pp. 5-14. 2009.
2. **“Additional” Diversity in Modern Retrieval/Recommendation System:** 
    - Mackie, Iain, Shubham Chatterjee, and Jeffrey Dalton. "Generative relevance feedback with large language models." In *Proceedings of the 46th International ACM SIGIR Conference on Research and Development in Information Retrieval*, pp. 2026-2031. 2023. [[Paper]](https://arxiv.org/pdf/2304.13157.pdf)
    - Mackie, Iain, Ivan Sekulic, Shubham Chatterjee, Jeffrey Dalton, and Fabio Crestani. "GRM: generative relevance modeling using relevance-aware sample estimation for document retrieval." *arXiv preprint arXiv:2306.09938* (2023). [[Paper]](https://arxiv.org/pdf/2306.09938.pdf)
    - Li, Xiaopeng, Lixin Su, Pengyue Jia, Xiangyu Zhao, Suqi Cheng, Junfeng Wang, and Dawei Yin. "Agent4Ranking: Semantic Robust Ranking via Personalized Query Rewriting Using Multi-agent LLM." *arXiv preprint arXiv:2312.15450* (2023). [[Paper]](https://arxiv.org/abs/2312.15450)
    - Luan, Yi, Jacob Eisenstein, Kristina Toutanova, and Michael Collins. "Sparse, dense, and attentional representations for text retrieval." *Transactions of the Association for Computational Linguistics* 9 (2021): 329-345. [[Paper]](https://aclanthology.org/2021.tacl-1.20.pdf)
    - Choudhary, Nurendra, Edward W. Huang, Karthik Subbian, and Chandan K. Reddy. "An Interpretable Ensemble of Graph and Language Models for Improving Search Relevance in E-Commerce." *arXiv preprint arXiv:2403.00923* (2024). [[Paper]](https://arxiv.org/abs/2403.00923)
    - Wang, Yuhao, Ruiyang Ren, Junyi Li, Wayne Xin Zhao, Jing Liu, and Ji-Rong Wen. "REAR: A Relevance-Aware Retrieval-Augmented Framework for Open-Domain Question Answering." *arXiv preprint arXiv:2402.17497* (2024). [[Paper]](https://arxiv.org/pdf/2402.17497.pdf)
    - Yao, Shunyu, Jeffrey Zhao, Dian Yu, Nan Du, Izhak Shafran, Karthik Narasimhan, and Yuan Cao. "React: Synergizing reasoning and acting in language models." *arXiv preprint arXiv:2210.03629* (2022). [[Paper]](https://arxiv.org/abs/2210.03629)
    - Zhang, Zhuosheng, Aston Zhang, Mu Li, and Alex Smola. "Automatic chain of thought prompting in large language models." *arXiv preprint arXiv:2210.03493* (2022). [[Paper]](https://arxiv.org/pdf/2210.03493.pdf)
    - Xu, Rongwu, Zehan Qi, Cunxiang Wang, Hongru Wang, Yue Zhang, and Wei Xu. "Knowledge Conflicts for LLMs: A Survey." arXiv preprint arXiv:2403.08319 (2024).

# 📖 **Contribution Guidelines:**

- Individuals interested in contributing to this GitHub page can do so in several ways. They can suggest new resources that enhance the existing content, particularly resources related to diversity retrieval in information retrieval. They can also share their own research work or notable work from others in the field. In addition, they are encouraged to contribute to ongoing discussions by providing their insights or asking thought-provoking questions. Every contribution, regardless of its size, is valuable in making this page a comprehensive resource on diversity retrieval.

# ☘️**About**

For further collaboration, inquiries, or contributions to this project, please feel free to reach out. I am Hy Dang, a PhD student at the University of Notre Dame with the interest in NLP, IR, Search or Recommendation, the creator of this page, specializing in Information Retrieval and Diversity Research. I welcome any queries or suggestions to enhance the resourcefulness of this GitHub page. You can contact me via email at hdang@nd.edu. Looking forward to potential collaborations and enriching discussions on this topic.
